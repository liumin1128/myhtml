html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;box-sizing:border-box; }

	#slider{
		display: block;
		position: relative;
		margin: 20px auto;
		width: 500px;
		height: 100px;
		/*overflow: hidden;*/
		box-shadow: 1px 1px 2px #333;
	}
	#slider ul{
		position: absolute;
		height: 100px;
		float: left;
		background-color: rgba(0,0,0,0.2);
		-webkit-transition: 1s;
		   -moz-transition: 1s;
		    -ms-transition: 1s;
		     -o-transition: 1s;
		        transition: 1s;


	}
	#slider ul li{
		list-style: none;
		height: 100px;
		overflow: hidden;
		float: right;
		background-color: rgba(0,0,255,0.2);

	}
	#slider_num{
		margin: 0;
		padding: 0;
		position: absolute;
		left: 10px;
		bottom: 10px;
	}
	.slidernum{
		margin: 0;
		padding: 0;
		width: 20px;
		height: 20px;
		margin: 10px;
		float: left;
		background-color: red;
		list-style: none;
		text-align: center;
		line-height: 20px;
		border: 1px solid #333;

	}
	img{
		width: 500px;
	}
	#section{
		width: 500px;
		height: 100px;
		margin: 0 auto;
		position: relative;
	}