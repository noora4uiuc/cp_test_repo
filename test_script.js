url = "https://www.autodesk.com"
validCode = 200

// API Check Template 
setStepName(`Navigate to ` + `${url}`)
open(`${url}`)
var respCode = Catchpoint.extract('resp-header','HTTP\\/\\d\\.\\d (\\d+)')
assert(respCode == `${validCode}`)
