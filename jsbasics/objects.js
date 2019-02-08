

var objVariable = {"item1":"value1",'item2':'value2', item3:'value3', item4:false, '$item5':true};
console.log(objVariable);
console.log(objVariable.item1);
console.log(objVariable.item2);
console.log(objVariable.item3);
console.log(objVariable.item4);
console.log(objVariable.$item5);
console.log(typeof(objVariable.item1));
console.log(typeof(objVariable.item2));
console.log(typeof(objVariable.item3));
console.log(typeof(objVariable.item4));
console.log(typeof(objVariable.$item5));

var objVariable2 = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML","test1","test2"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}

console.log("objVariable2 : "+objVariable2.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso[2]);