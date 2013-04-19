//Global Variables
//Don't need to be, but good form to have access to current sheet, etc. in all scripts on a sheet.
var sheetName = "Sheet1" //Name of sheet that contains addresses
var validRangeAddress = [/*A1 of cells that contain addresses (i.e. "A1","B2")*/];
var sheet = SpreadsheetApp.getActiveSpreadsheet();
var i; //Standard Loop Counter
//var debugCell = "A1" //Where you want error messages to appear

function shouldConvert(b)
{
    var isAddress = false; //Boolean Test to see verify this cell should get converted
    isAddress = validRangeAddress.indexOf(b) != -1 ? true : false;
    return isAddress;
}

function convert(b)
{
    var a = b.getValue();
    var a2=String(a); //stringify for the benefit of Google Docs, not normally necessary
    
    var str = "maps.google.com/maps?hl=en&q=";
    var n = a2.split(" ");//Array of words

    //Append Words separated by '+' to maps url
    for(i=0;i<n.length;i++)
      str+=n[i] + "+";
    
    //Make a link to the URL
    b.setFormula('HYPERLINK("' + str + '", "' + a + '")');
}

function makeLink(b)
{
    if(shouldConvert(b))
        convert(b);
}


function onEdit(e)
{

  var b = sheet.getActiveRange().getA1Notation();  //Address of Cell being edited
  if(sheet.getActiveSheet().getSheetName().toLowercase == sheetName.toLowerCase())
    makeLink(b);
}
