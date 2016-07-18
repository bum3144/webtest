function startPage(){
	if(window.applicationCache){
		console.log("어플리케이션 캐시를 지원합니다.");
	}else{
		console.log("어플리케이션 캐시를 지원하지 않습니다.");
	}
}