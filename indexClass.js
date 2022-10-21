class Clouds {
  constructor(){
    this.img = document.querySelectorAll('img');
    this.body = addEventListener('mousemove', (event)=>this.move(event))
  }
  
  
  move(event){
    const { clientX, clientY } = event;

    this.img.forEach((element,index) =>{
      const ratioX = element.getAttribute('ratioX');
      const ratioY = element.getAttribute('ratioY');
      
       if(index == 4){
        element.style.left=`${clientX}px`;
        element.style.top = `${clientY * ratioY}px`
        element.style.transform=`translate(-50%,-50%)`
       }else{
        element.style.transform=`translate(${clientX/2 * ratioX}px, ${clientY/2 * ratioY}px)`
       }
    })
  
    
  }
}
clouds = new Clouds();
