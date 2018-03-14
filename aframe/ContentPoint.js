function ContentPoint(type, mediaUri, orientation, description, title) {
  this.type = type;
  this.mediaUri = mediaUri;
  this.orientation = orientation;
  this.description = description;
  this.title = title;
  this.createMarker = createMarker;
  this.createImageMarker = createImageMarker;
  this.createTextMarker = createTextMarker;
  this.createAudioMarker = createAudioMarker;
  this.calculatePositions = calculatePositions();
}


function createMarker(posX){
  if(this.type == "image"){
    console.log("image");
    this.createImageMarker(posX);
  }
  else if(this.type == "text"){
    console.log("text");
    this.createTextMarker(posX);
  }
  else if(this.type == "audio"){
    console.log("audio");
    this.createAudioMarker(posX);
  }
}

function createImageMarker(posX){
  var newEl = document.createElement('a-entity');
  newEl.setAttribute('img-marker',"imgUri:" + this.mediaUri + ";position:" + posX +" 0 -10;");
  newEl.setAttribute("scale", "1.0 1.0 0.0");      
  document.getElementById("markers").appendChild(newEl);
}
function createTextMarker(posX){

  var signpostGeometry = document.createElement('a-entity');
  signpostGeometry.setAttribute("id", "signpostGeometry");
  signpostGeometry.setAttribute("geometry", "primitive: plane; width: auto; height: 0.5");
  signpostGeometry.setAttribute("color", "blue");  
  signpostGeometry.setAttribute("position", posX + " 1 -10");
  signpostGeometry.setAttribute("text", "value: This text will be  units wide. This text will be  units wide. This text will be  units wide. This text will be  units wide.This text will be  units wide.");  

  var signlegGeometry = document.createElement('a-entity');
  signlegGeometry.setAttribute("id", "signlegGeometry");
  signlegGeometry.setAttribute("geometry", "primitive: plane; width: 0.1; height: 2.5");
  signlegGeometry.setAttribute("color", "blue");  
  signlegGeometry.setAttribute("position", "0 -1 0"); 

  document.getElementById("markers").appendChild(signpostGeometry);  
  document.getElementById("signpostGeometry").appendChild(signlegGeometry); 
}
function createAudioMarker(){

}
