window.onload = function(){

	class APT{
		constructor(dong, number, aptName, floor, price, area){
			this.dong = dong;
			this.number = number;
			this.aptName = aptName;
			this.floor = floor;
			this.price = price;
			this.area = area;
		}
		get Dong(){return this.dong;}
		get Number(){return this.number;}
		get AptName(){return this.aptName;}
		get Floor(){return this.floor;}
		get Price(){return this.price;}
		get Area(){return this.area;}
	}
	
	$.ajax({
	        url: './csv/아파트매매실거래자료현황.csv',
	        dataType: 'text',
	      }).done(successFunction);

function successFunction(data) {
//	console.log("함수 시작");
	aptlist = [];
	idx = 0;
    var allRows = data.split(/\r?\n|\r/);
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
      if (singleRow === 0) {
        continue;
      }
      var rowCells = allRows[singleRow].split(',');
      aptlist[idx++] = new APT(rowCells[3],rowCells[4],rowCells[5],rowCells[6],rowCells[7],rowCells[8]);
    }
    
    for(var i=0; i<100; i++){
    	var d = `<div class="col-lg-4 col-md-6">
					<div class="listing__item">
                	<div class="set-bg">
                    <div class="listing__item__text">
                        <div class="listing__item__text__inside">
                         	<h5 >${aptlist[i].aptName}</h5>
                            <div class="listing__item__text__rating">
								<div class="listing__item__rating__star">
									<span class="icon_star"></span>
									<span class="icon_star"></span>
									<span class="icon_star"></span>
									<span class="icon_star"></span>
									<span class="icon_star-half_alt"></span>
								</div>
								<h6>${aptlist[i].price} 만원 </h6>
							</div>
							<ul>
								<li><span class="icon_pin_alt"></span>${aptlist[i].dong} ${aptlist[i].number}</li>
								<li><span class="icon_phone"></span> (+12) 345-678-910</li>
							</ul>
						</div>
						<div class="listing__item__text__info">
							<div class="listing__item__text__info__left">
								<img src="img/listing/list_small_icon-1.png" alt="">
								<span>${aptlist[i].aptName}</span>
							</div>
							<div class="listing__item__text__info__right">판매 완료</div>
						</div>
					</div>
				</div>
			</div>`;
    	
    	if(aptlist[i].dong == '광명동'){
    		$('#gwang').append(d);   
    	}else if(aptlist[i].dong == '소하동'){
    		$('#soha').append(d); 
    	}else if(aptlist[i].dong == '철산동'){
    		$('#chulsan').append(d); 
    	}else if(aptlist[i].dong == '하안동'){
    		$('#haan').append(d); 
    	}
    }
}
}