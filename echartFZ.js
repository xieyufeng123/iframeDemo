//  var EFZ={
//      afUrl:"./demo.html",
//      fDiv:null,
//      init:function(){
//          var myIframe=document.createElement("iframe");
//          myIframe.src=this.afUrl;
//          myIframe.frameBorder=0;
//          myIframe.width='800px';
//          myIframe.height='600px';
//          myIframe.scrolling='no';
//          if(!this.fDiv){
//              this.fDiv='iframeMain'
//          }
//          document.getElementById(this.fDiv).appendChild(myIframe);
//      }
//  }
 function EFZ2(fDiv){
     this.afUrl='demo.html';
     this.fDiv=fDiv;
 }
 EFZ2.prototype.init=function(){
    var myIframe=document.createElement("iframe");
    myIframe.src=this.afUrl;
    myIframe.frameBorder=0;
    myIframe.width='800px';
    myIframe.height='600px';
    myIframe.scrolling='no';
    if(!this.fDiv){
        this.fDiv='iframeMain'
    }
    document.getElementById(this.fDiv).appendChild(myIframe);
 }
 function faterAlert(){
     alert("succ son view fater");
 }