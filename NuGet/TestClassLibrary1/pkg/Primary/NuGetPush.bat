setlocal
@echo off

@rem ApiKeyを登録
..\..\..\nuget.exe SetApiKey [ApiKey]

@rem nuget.orgにPrimaryPackageを登録(SymbolPackageを登録しに行ってエラーになるが、それは無視)
..\..\..\nuget.exe push OssCons.DotNetSubcommittee.TestClassLibrary*.nupkg -source https://www.nuget.org/

pause