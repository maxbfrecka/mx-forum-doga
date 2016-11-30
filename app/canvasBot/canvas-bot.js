angular.module('canvasBot',[])

.directive('mxCanvasBot', ['testData', 'canvasData', '$timeout', '$interval', 'threadData', function(testData, canvasData, $timeout, $interval, threadData){
	return {
		restrict: 'E',
	  templateUrl: 'canvasBot/canvas-bot.html',
	  scope: {},
	  transclude: true,
	  controllerAs: "ct",
	  link: function(scope,element,attrs){
	  	scope.canvasData = canvasData

	  	//width and height for canvasbot
	  	scope.width = attrs.width
	  	scope.height = attrs.height

	  	//canvas id for directive
	  	scope.canvasid = attrs.canvasid
	  	console.log("the canvas id is:" + scope.canvasid)
	  	//in canvas backgroundcolor
	  	scope.cbgc = attrs.cbgc
	  	//gets all params for canvas from attributes in directive inside thread preview 
	  	/*scope.param1=attrs.paramOne
	  	scope.param2=attrs.paramTwo
	  	scope.param3=attrs.paramThree
	  	scope.param4=attrs.paramFour
	  	scope.param5=attrs.paramFive
	  	console.log('param1: ' + scope.param1)
	  	console.log('param2: ' + scope.param2)
	  	console.log('param3: ' + scope.param3)
	  	console.log('param4: ' + scope.param4)
	  	console.log('param5: ' + scope.param5)

	  	scope.rep1=attrs.crepone
	  	scope.rep2=attrs.creptwo

	  	scope.paramAdd1= attrs.cparamaddone
	  	scope.paramAdd2= attrs.cparamaddtwo

	  	console.log('rep1:' + scope.rep1)
	  	console.log('rep2:' + scope.rep2)
	  	console.log('add1:' + scope.paramAdd1)
	  	console.log('add2:' + scope.paramAdd2)
	  	console.log(scope.canvasid)
	  	$timeout(function(){
				scope.canvasData.generateCanvasB(scope.canvasid, scope.param1, scope.param2, scope.param3, scope.param4, scope.param5, scope.cRepOne, scope.cRepTwo, scope.paramAdd1, scope.paramAdd2)
				}, 3000)*/


				var limit1 = 20
			var limit2 = 10

	  	scope.param1=getRandomNumber(0,limit1)
	  	scope.param2=getRandomNumber(0,limit1)
	  	scope.param3=getRandomNumber(0,limit1)
	  	scope.param4=getRandomNumber(0,limit1)
	  	scope.param5=getRandomNumber(0,limit2)
	  	console.log('param1: ' + scope.param1)
	  	console.log('param2: ' + scope.param2)
	  	console.log('param3: ' + scope.param3)
	  	console.log('param4: ' + scope.param4)
	  	console.log('param5: ' + scope.param5)

	  	scope.cRepOne=getRandomNumber(5,30)
	  	scope.cRepTwo=getRandomNumber(5,30)
	  	console.log(scope.cRepOne)
	  	console.log(scope.cRepTwo)

	  	scope.paramAdd1=getRandomNumber(0,5)
	  	scope.paramAdd2=getRandomNumber(0,5)
	  	console.log(scope.paramAdd1)
	  	console.log(scope.paramAdd2)

	  	$timeout(function(){
				scope.canvasData.generateCanvasB(scope.canvasid, scope.param1, scope.param2, scope.param3, scope.param4, scope.param5, scope.cRepOne, scope.cRepTwo, scope.paramAdd1, scope.paramAdd2)
				}, 100)





	  },
	  controller: function($scope, canvasData, $attrs) {
	  	var ct = this
	  }
	}
}])




.factory('canvasData', function(){
	var canvasData = {}

	canvasData.imageID = null;



	canvasData.generateCanvasB = function(id, param1, param2, param3, param4, param5, rep1, rep2, add1, add2){
		console.log('huh?')
		var draw0 = function(){
	  	var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			console.log('the GENERATECANVAS id is:' + id)
			var draw1a = function(){
				ctx.beginPath(); 
				ctx.lineWidth=getRandomNumber(.5,3);
				ctx.moveTo(param3,param2);
				ctx.lineTo(param1,param3+param1);
				ctx.moveTo(param1,param4);
				ctx.lineTo(param3+param3,param2);
				ctx.arcTo(param1,param2,param3,param4,param5)
				ctx.moveTo(param2,param4);
				ctx.lineTo(param3,param1);
				ctx.lineTo(param4+param1,param2);
				ctx.strokeStyle=randomRGBcolor();
				ctx.fillStyle = randomRGBcolor();
				ctx.stroke()
				ctx.fill()
				ctx.closePath()
				ctx.scale(2,2)
			}
			draw1a()
			
			var draw1b = function(){
				ctx.beginPath(); 
				ctx.lineWidth=getRandomNumber(.5,3);
				ctx.moveTo(param1,param3);
				ctx.lineTo(param2,param4+param5);
				ctx.moveTo(param2,param5);
				ctx.lineTo(param5+param5,param1);
				ctx.arcTo(param5,param4,param1,param3,param5)
				ctx.moveTo(param2,param4);
				ctx.lineTo(param3,param1);
				ctx.lineTo(param5+param1,param3);
				ctx.strokeStyle=randomRGBcolor();
				ctx.fillStyle = randomRGBcolor();
				ctx.stroke()
				ctx.fill()
				ctx.closePath()
				console.log('draw1b has executed')
			}
			draw1b()
		}

		var draw2 = function(){

			for (var i=0; i<rep1; i++){
				draw0()
				param1=param1+add1
				param2=param2+add1+1
				param3=param3+add1+add1*.5
				param4=param4+add1+add1
			}
		}

		var draw3 = function(){
				for (var i=0; i<rep2; i++){
					draw2()
					param1=param1+add2
					param2=param2+add2+1
					param3=param3+add2+add2*.5
					param4=param4+add2+add2
				}
			}




		draw3()
	}





















	canvasData.generateImagesA = function(id, param1, param2){
	  	var canvas = document.getElementById(id);
			var ctx = canvas.getContext("2d");
			ctx.beginPath(); 
			ctx.lineWidth="1.9";
			ctx.strokeStyle=randomRGBcolor();
			ctx.fillStyle = randomRGBcolor();
			ctx.fill();
			ctx.moveTo(0,40);
			ctx.lineTo(50,30+20);
			ctx.moveTo(param1,30);
			ctx.lineTo(150+20,param2);
			ctx.moveTo(param2,100);
			ctx.lineTo(230,param1);
			ctx.lineTo(60+param1,param2);
			ctx.stroke();
	}


	
	return canvasData

})