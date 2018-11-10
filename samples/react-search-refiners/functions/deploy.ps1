[CmdletBinding()]
Param (

    [Parameter(Mandatory = $True)]
    $AzureLoginName,

    [Parameter(Mandatory = $True)]
    [securestring]$AzureSecurePassword,

    [Parameter(Mandatory = $True)]
    [ValidateSet('DEV','QA','PROD')]
    [string]$Environment,

    [Parameter(Mandatory = $False)]
    [string]$VersionNumber="0.0.0"
)

Write-Output "Version: $VersionNumber"

$0 = $myInvocation.MyCommand.Definition
$CommandDirectory = [System.IO.Path]::GetDirectoryName($0)

$AppSettingsFilePath = Join-Path -Path $CommandDirectory -ChildPath "src\local.settings.json"

if ($Environment -eq "DEV") {

    # Copy the dev config file
    Get-Item -Path .\src\local.settings.dev.json | Copy-Item -Destination $AppSettingsFilePath -Force
}

# Update version in the local.settings.json file
$AppSettings = Get-Content -Path $AppSettingsFilePath -Raw | ConvertFrom-Json

$AppSettings = $AppSettings
$AppSettings.Values.version = $VersionNumber

[System.IO.File]::WriteAllLines($AppSettingsFilePath, ($AppSettings | ConvertTo-Json), [System.Text.UTF8Encoding]($False))

# Install packages
#npm i

$ErrorActionPreference = 'Continue'

# Execute tests
#npm run test:ci 2>&1 | Write-Host

#if ($LASTEXITCODE -eq 1) {
#    throw "Error during tests!"
#}

# Build the solution
$ErrorActionPreference = 'Stop'

if ($env:TARGET_ENV -eq 'DEV') {
    npm run build:dev
} else {
    npm run build
}

# Set the new version
npm version $VersionNumber

# Deploy the functions
Push-Location '.\dist'

# Login to Azure
Write-Output "Login to Azure..."
$Password = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($AzureSecurePassword))
az login -u $AzureLoginName -p $Password

# Get the Azure function name according to the selected environment
$AzureFunctionName = $AppSettings.Values.Azure_Function_Name

# https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#publish
Write-Output "Deploy to function $AzureFunctionName..."
func azure functionapp publish $AzureFunctionName --publish-local-settings --overwrite-settings

Pop-Location