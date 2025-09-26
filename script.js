//your code here!
const ol = document.getElementById('infi-list')
let totalitems=0;
function listItem(count){
	for(let i=0; i<count; i++){
		totalitems++;
		let li = document.createElement('li');
		li.innerText=`Item ${totalitems}`;
		ol.appendChild(li);
	}
}
listItem(10);

ol.addEventListener('scroll', () => {
  if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight - 1) {
    listItem(2);
  }
});