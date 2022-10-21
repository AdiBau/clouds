document.addEventListener('mousemove', (event) => move(event));
const img = document.querySelectorAll('img');
move = (event) => {
  const { clientX, clientY } = event;
  console.log('jest');


  img.forEach((element,index) =>{
    const ratioX = element.getAttribute('ratioX');
    const ratioY = element.getAttribute('ratioY');

    
     if(index == 4){
      element.style.left=`${clientX}px`;
      element.style.top = `${clientY * ratioY}px`
      element.style.transform=`translate(-50%,-50%)`
     }else{
      element.style.transform=`translate(${clientX/2 * ratioX}px, ${clientY/2 * ratioY}px)`;
    }
    
}
)
}