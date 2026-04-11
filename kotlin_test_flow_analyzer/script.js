function run(){
let input=document.getElementById('input').value||"";
let output="";
let notes="";

// unit test
if(input.includes("class") || input.includes("fun")){
  output += "@Test\nfun testExample() {\n    assert(true)\n}\n\n";
  notes += "Unit test template generated.\n";
}

// mock
if(input.includes("class") || input.includes("interface")){
  output += "// Mock example\nval mock = mockk<MyClass>()\n";
  notes += "MockK suggestion added.\n";
}

// flow testing
if(input.includes("flow") || input.includes("collect")){
  notes += "Flow testing scenario detected.\n";
}

if(!notes) notes="Basic test scaffold generated.";

document.getElementById('result').innerText =
"Output:\n"+output+"\nNotes:\n"+notes;
}
