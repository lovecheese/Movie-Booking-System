<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>艾K网</title>
<link rel="stylesheet"  href="../CSS/HomePage.css"  type="text/css" />

</head>

<body>
	<div class="top_item">
		<div></div>
		<div class="flex_box">
			<div class="blank"></div>
			<input type="text" name="search" class="input_Search" autocomplete="off"
					   placeholder="加勒比海盗"/>
			<label class="button_Search"></label>
		</div>
		<div class="flex_box_1">
		<% 
		String Username = (String)session.getAttribute("username");
		if (Username == null || Username.equals("")) {
		%>
			<p><span class="p_span">注册</span>&nbsp;|&nbsp;<span class="p_span">登录</span></p>
		<%
		} else {
		%>
			<p><span class="p_span_2">你好,<%=Username%></span>
		<%
		}
		%>
			<p><span class="P_span_1">购物车</span>&nbsp;|&nbsp;<span class="p_span_1">我的订单</span></p>
			<p><span class="p_span_1">网站导航</span>&nbsp;|&nbsp;
			        <span class="p_span_1">客户服务</span>
			</p>
		</div>		
	</div>

	<div class="picture_box">
		<div class="picture">
			<div class="previous"></div>
	  		<div class="next"></div>
	  		
			<div class="show" style="width:180px; height:120px; top:131px; left:244px;"></div>
			<div class="show" style="width:220px; height:130px; top:121px; left:184px;"></div>
			<div class="show" style="width:260px; height:140px; top:111px; left:130px;"></div>
			<div class="show" style="width:280px; height:170px; top:95px; left:0px;"></div>
			<div class="show" style="width:620px; height:320px; top:20px; left:215px;"></div>
			<div class="show" style="width:280px; height:170px; top:95px; left:770px;"></div>
			<div class="show" style="width:260px; height:140px; top:111px; left:690px;"></div>
			<div class="show" style="width:220px; height:130px; top:121px; left:540px;"></div>
			<div class="show" style="width:180px; height:120px; top:131px; left:420px;"></div>
		</div>

		<div class="circle_box">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
		</div>
	</div>
	
    <div class="movie-blank">
        <div class="top-side">
			<div class="p_span_3">今日发现</div>
			<div class="hr2"><hr /></div>
        </div>
        
        <div class="movie-content">
        	<div class="top-content-side">
        		<div class="div_4"></div> 
        		<div class="div_1"><p>正在热映&nbsp;&nbsp;<span class="span_1">24</span>&nbsp;&nbsp;部</p></div>
        		<div class="div_2"><p>即将上映&nbsp;&nbsp;<span class="span_1">80</span>&nbsp;&nbsp;部</p></div>
        		<div class="div_3"><p>优惠大爆送&nbsp;&nbsp;<span class="span_1">5</span>&nbsp;&nbsp;部</p></div>
        		<div class="div_4"></div>
        	</div>

        	<div class="middle-content-1" id="onplay">
        		<div class="left-side">
        			<a target="_blank" title="" href="" class="a-class-1">
        			    <img src="../../Image/onplay/Dangal_small.jpg" class="left-image-1" />
        			</a>
        			<div class="left-information-1">
        			    	<div class="left-information-1-extra-1">摔跤吧!爸爸&nbsp;--&nbsp;动作/喜剧</div>
        			    	<div>2017/5/5开映&nbsp;--&nbsp;169分钟</div>
        			    	<div class="left-information-1-extra-2">23元起</div>
        			</div>
        			<div class="left-bottom-buyticket">
        				<div class="left-bottom-button">购票</div>
        			</div>
        		</div>

        		<div class="right-side">
        			<div class="ul-movie">
        				<ul id="ul-onplay">
        					<li class="li-item">
        						<a target="_blank" href="" title="" class="a-class-2">
        							<img src="../../Image/onplay/8_miles_small.jpg" />
        						</a>
								<div class="sale-information">
									<div>8英里</div>
									<div>剧情--110分钟</div>
									<div>2002/11/8开映</div>
									<div>25元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
        					</li>
        					<li class="li-item">
        						<a target="_blank" href="" title="" class="a-class-2">
        							<img src="../../Image/onplay/The_castle_small.jpg" />
        						</a>
								<div class="sale-information">
									<div>城堡</div>
									<div>剧情--123分钟</div>
									<div>1997/9/6开映</div>
									<div>35元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
        					</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/onplay/Source_Code_small.jpg" />
								</a>
								<div class="sale-information">
									<div>源代码</div>
									<div>科幻--94分钟</div>
									<div>2011/8/30开映</div>
									<div>19元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/onplay/The_Revenant_small.jpg" />
								</a>
								<div class="sale-information">
									<div>荒野猎人</div>
									<div>剧情/冒险--151分钟</div>
									<div>2016/3/18开映</div>
									<div>27元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/onplay/The_Lone_Ranger_small.jpg" />
								</a>
								<div class="sale-information">
									<div>独行者</div>
									<div>动作/冒险--149分钟</div>
									<div>2013/10/5开映</div>
									<div>28元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/onplay/Fast_&_Furious_8_small.jpg" />
								</a>
								<div class="sale-information">
									<div>速度与激情8</div>
									<div>动作/剧情--136分钟</div>
									<div>2017/4/14开映</div>
									<div>37元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/onplay/The_Last_of_the_Mohicans_small.jpg" />
								</a>
								<div class="sale-information">
									<div>最后的莫希干人</div>
									<div>爱情/冒险--112分钟</div>
									<div>1992/8/25开映</div>
									<div>14元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/onplay/Pirates_of_the_Caribbean_1_small.jpeg" />
								</a>
								<div class="sale-information">
									<div>加勒比海盗1</div>
									<div>动作/冒险--143分钟</div>
									<div>2003/7/9开映</div>
									<div>32元起</div>
								</div>
								<div class="right-bottom-button">购票</div>
							</li>
        				</ul>
        			</div>
             		<div class="ul-page-1">
        				<ul>
        					<li>1</li>
        					<li>2</li>
        					<li>3</li>
        				</ul>
        			</div>
        		</div>
        	</div>

        	<div class="middle-content-2" id="readyplay">
        		<div class="left-side">
					<a href="BuyTicket_Pirates_of_the_Caribbean_Dead_Men_Tell_No_Tales.jsp" target="_blank" class="a-class-1">
        			    <img src="../../Image/readyplay/Pirates_ of_the_Caribbean_Dead_ Men_Tell_No_Tales_small.jpg" class="left-image-1" />
        			    <div class="Icon_play"></div>
        			</a>
        			<div class="left-information-1">
        			    <div class="left-information-1-extra-1">
        			    	 <a href="BuyTicket_Pirates_of_the_Caribbean_Dead_Men_Tell_No_Tales.jsp" target="_blank" style="text-decoration-line:none">加勒比海盗5:死无对证
        					 </a>
        			    </div>
        			    <div>2017/5/26上映</div>
        			    <div class="left-information-1-extra-2">想看人数</div>
        			</div>
        			<div class="left-bottom-buyticket">
        				<div class="left-bottom-button">想看</div>
        			</div>
        		</div>

        		<div class="right-side">
        			<div class="ul-movie">
        				<ul id="ul-readyplay">
        					<li class="li-item">
        						<a target="_blank" href="" title="" class="a-class-2">
        							<img src="../../Image/readyplay/The_Mummy_small.jpg" />
        						</a>
        						<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>新木乃伊</div>
									<div>动作/冒险</div>
									<div>2017/6/19上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
        					</li>
        					<li class="li-item">
        						<a target="_blank" href="" title="" class="a-class-2">
        							<img src="../../Image/readyplay/Ratchet_and_Clank_small.jpg" />
        						</a>
        						<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>银河守卫队</div>
									<div>动画/冒险</div>
									<div>2017/5/27上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
        					</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/readyplay/Alien:Covenant_small.jpg" />
								</a>
								<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>异形:契约</div>
									<div>科幻/惊悚</div>
									<div>2017/6/16上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/readyplay/Spider-Man_ Homecoming_small.jpg" />
								</a>
								<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>蜘蛛侠:英雄归来</div>
									<div>动作/科幻</div>
									<div>2017/8上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/readyplay/War_for_the_Planet_of_the_Apes_small.jpg" />
								</a>
								<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>猩球崛起3:终极之战</div>
									<div>动作/科幻</div>
									<div>2017/8上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/readyplay/Despicable_Me_3_small.jpg" />
								</a>
								<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>神偷奶爸3</div>
									<div>动作/动画</div>
									<div>2017/7/7上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/readyplay/Thor:Ragnarok_small.jpg" />
								</a>
								<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>雷神3:诸神黄昏</div>
									<div>动作/科幻</div>
									<div>2017/11/3上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
							</li>
							<li class="li-item">
								<a target="_blank" href="" title="" class="a-class-2">
									<img src="../../Image/readyplay/Wonder_Woman_small.jpg" />
								</a>
								<div class="Icon-play-2"></div>
								<div class="sale-information" name="readyplay-sale">
									<div>神奇女侠</div>
									<div>动作/科幻</div>
									<div>2017/6/2上映</div>
									<div>想看人数</div>
								</div>
								<div class="right-bottom-button">想看</div>
							</li>
        				</ul>
        			</div>
             		<div class="ul-page-1">
        				<ul>
        					<li>1</li>
        					<li>2</li>
        					<li>3</li>
        					<li>4</li>
        					<li>5</li>
        					<li>6</li>
        					<li>7</li>
        					<li>8</li>
        				</ul>
        			</div>
        		</div>
        	</div>

        	<div class="middle-content-3" id="discount">
        		<div class="left-side">
        			<a target="_blank" title="" href="" class="a-class-1">
        			    <img src="../../Image/discount/Fantastic_Beasts_and_Where_to_Find_Them_small.jpg" class="left-image-1" />
        			    <div class="Icon-discount Icon-discount-extra"></div>
        			</a>
        			<div class="left-information-1">
        			    <div class="left-information-1-extra-1">神奇动物在哪里&nbsp;--&nbsp;奇幻/冒险</div>
        			    <div>2016/11/18开映&nbsp;--&nbsp;133分钟</div>
        			    <div class="left-information-1-extra-2">5折&nbsp;&nbsp;--&nbsp;&nbsp;15元</div>
        			</div>
        			<div class="left-bottom-buyticket">
        				<div class="left-bottom-button">购票</div>
        			</div>
        		</div>

        		<div class="right-side">
        			<ul id="ul-discount">
        				<li class="li-item li-extra">
							<a target="_blank" href="" title="" class="a-class-2">
        						<img src="../../Image/discount/The_Jungle_Book_small.jpg" />
        					</a>
        					<div class="Icon-discount"></div>
							<div class="sale-information">
								<div>奇幻森林</div>
								<div>奇幻/冒险--106分钟</div>
								<div>8.8折</div>
								<div>16元</div>
							</div>
							<div class="right-bottom-button">购票</div>
						</li>
						<li class="li-item li-extra">
        					<a target="_blank" href="" title="" class="a-class-2">
        						<img src="../../Image/discount/Now_You_See_Me_2_small.jpg" />
        					</a>
        					<div class="Icon-discount"></div>
							<div class="sale-information">
								<div>惊天魔盗团2</div>
								<div>动作/冒险--130分钟</div>
								<div>8.5折</div>
								<div>17元</div>
							</div>
							<div class="right-bottom-button">购票</div>
        				</li>
        				<li class="li-item li-extra">
							<a target="_blank" href="" title="" class="a-class-2">
        						<img src="../../Image/discount/Deadpool_small.jpg" />
        					</a>
        					<div class="Icon-discount"></div>
							<div class="sale-information">
								<div>死侍</div>
								<div>动作/科幻--108分钟</div>
								<div>8.8折</div>
								<div>18元</div>
							</div>
							<div class="right-bottom-button">购票</div>
						</li>
        				<li class="li-item li-extra">
        					<a target="_blank" href="" title="" class="a-class-2">
        						<img src="../../Image/discount/The_Legend_of_Tarzan_small.jpg" />
        					</a>
        					<div class="Icon-discount"></div>
							<div class="sale-information">
								<div>泰山归来：险战丛林</div>
								<div>动作/冒险--110分钟</div>
								<div>9折</div>
								<div>19元</div>
							</div>
							<div class="right-bottom-button">购票</div>
        				</li>
        		    </ul>
        		</div>
        	</div>
    	</div>

    	<div class="trailer">
    		<div class="trailer-title">
    			<div>预告精华</div>
    			<div>全部>></div>
    		</div>
    		<div class="trailer-box">
    			<ul>
    				<li class="trailer-li">
    					<div class="trailer-li-picture">
    						<img src="../../Image/video_poster/Pirates_ of_the_Caribbean_Dead_ Men_Tell_No_Tales_poster.jpg" />
    						<div class="trailer-information">
    							<div class="trailer-play"></div>
    							<div>看点:时隔六年，杰克·斯派洛卷席归来</div>
    						</div>
    					</div>
    					<div class="trailer-li-content">加勒比海盗5:死无对证</div>
    				</li>
    				<li class="trailer-li">
    					<div class="trailer-li-picture">
    						<img src="../../Image/video_poster/War_for_the_Planet_of_the_Apes_poster.jpg" />
    						<div class="trailer-information">
    							<div class="trailer-play"></div>
    							<div>看点:猿族与人类军队的大决战</div>
    						</div>
    					</div>
    					<div class="trailer-li-content">猩球崛起3:终极之战</div>
    				</li>
    				<li class="trailer-li">
    					<div class="trailer-li-picture">
    						<img src="../../Image/video_poster/The_Mummy_poster.jpg" />
    						<div class="trailer-information">
    							<div class="trailer-play"></div>
    							<div>看点:汤姆·克鲁斯再度拯救世界</div>
    						</div>
    					</div>
    					<div class="trailer-li-content">新木乃伊</div>
    				</li>
    				<li class="trailer-li">
    					<div class="trailer-li-picture">
    						<img src="../../Image/video_poster/Spider-Man_ Homecoming_poster.jpg" />
    						<div class="trailer-information">
    							<div class="trailer-play"></div>
    							<div>看点:钢铁侠教导蜘蛛侠成为真正的英雄</div>
    						</div>
    					</div>
    					<div class="trailer-li-content">蜘蛛侠:英雄归来</div>
    				</li>
    				<li class="trailer-li">
    					<div class="trailer-li-picture">
    						<img src="../../Image/video_poster/TransFormer_5_poster.jpg" />
    						<div class="trailer-information">
    							<div class="trailer-play"></div>
    							<div>看点:“汽车人”的历史将被揭开</div>
    						</div>
    					</div>
    					<div class="trailer-li-content">变形金刚5:最后的骑士</div>
    				</li>
    				<li class="trailer-li">
    					<div class="trailer-li-picture">
    						<img src="../../Image/video_poster/Wonder_Woman_poster.jpg" />
    						<div class="trailer-information">
    							<div class="trailer-play"></div>
    							<div>看点:一部带有强烈女性意识的英雄拯救世界的电影</div>
    						</div>
    					</div>
    					<div class="trailer-li-content">神奇女侠</div>
    				</li>
    			</ul>
    		</div>
    	</div>

    	<div class="News">
    		<div class="News-title">
    			<div>今日资讯</div>
    			<div>全部>></div>
    		</div>
    		<div class="News-box">
    			<div class="left-News-box">
    				<ul>
    					<li><a href="">《摔跤吧!爸爸》内地票房突破十亿，创非好莱坞进口片最高纪录</a></li>
    					<li>
    					    <a href="">科幻大片袭来!《蜘蛛侠》、《变形金刚5》、《神奇女侠》等大片劲爆</a>
    					</li>
    					<li>
    						<a href="">《加勒比海盗5:死无对证》在北美以外的国际市场狂揽2.08亿美元，强势称霸上周末海外票房榜</a>
    					</li>
    					<li><a href="">阿汤哥25000英尺高空挑战零重力动作戏,真实而惊心动魄地演绎还原</a></li>
    					<li><a href="">4部好莱坞大片进军暑期档，夹缝中国产片如何突围?</a></li>
    				</ul>
    			</div>
    			<div class="vertical-line"></div>
    			<div class="right-News-box">
    				<ul>
    					<li><a href="">戛纳电影节闭幕 中国《小城二月》获短片金棕榈</a></li>
    					<li><a href="">冒险传奇《迷失Z城》中国上映 4K超高清画质呈现</a></li>
    					<li><a href="">《神奇女侠》全国点映震撼开启 5月31日抢先体验</a></li>
    					<li>
    					   <a href="">波兰斯基戛纳红毯上"左拥右抱"爱娃格林&乌玛瑟曼走上"真事改编"首映红</a>
    					</li>
    					<li><a href="">擎天柱《变形金刚5》被洗脑正邪难辨大杀四方</a></li>
    				</ul>
    			</div>
    		</div>
    	</div>

    	<div class="Discuss">
    		<div class="Discuss-title">
    			<div>今日热议</div>
    			<div>全部>></div>
    		</div>
    		<div class="Discuss-box">
    			<div class="left-Discuss-box">
    				<div class="Discuss-box-picture">
    					<ul>
    						<li>
    							<img src="../../Image/discuss/War_for_the_Planet_of_the_Apes_discuss.jpg" />
    						</li>
    						<li>
    							<img src="../../Image/discuss/Alien:Covenant_discuss.jpg" />
    						</li>
    						<li>
    							<img src="../../Image/discuss/Wonder_Woman_discuss.jpg" />
    						</li>
    					</ul>
    				</div>
    				<div><br/><span>"</span>好莱坞大片正在不断冲击国内的市场，国内电影的市场不断被压缩，但其中一部分的原因是国内电影的质量没外来电影好而已。
    				</div>
    			</div>
    			<div class="right-Discuss-box">
    				<ul>
    					<li>
    						<div>"漫威继续推出英雄，我感觉这种模式能维持很久很久，不断有新英雄的出现，蚁人、海人，然后又有大boss，于是很多英雄集结来对付大boss，拯救世界，哈哈，真‘刺激’。"</div>
    						<img src="../../Image/discuss/Spider-Man:Homecoming_discuss.jpg" />
    					</li>
    					<li>
    						<div>"有没有跟我一样，看《雷神》更多看的是洛基呢？"</div>
    						<img src="../../Image/discuss/Thor:Ragnarok_discuss.jpg" />
    					</li>
    					<li>
    						<div>"《变形金刚》系列完全是商业大片的楷模，我不知道为什么还会有人想看，至少我自己而言，我看到第三部就弃了。我不是否定《变形金刚》，但其接连续集的本意完全是朝着商业的角度。"</div>
    						<img src="../../Image/discuss/TransFormers_5_discuss.jpg" />
    					</li>
    				</ul>
    			</div>
    		</div>
    	</div>
    </div>
	

    <div class="rand-right-size-1">
    	<div class="">
        
    		
    	</div>
    </div>
        		

<script src="../Javascript/jquery.min.js"></script>
<script type="text/javascript" src="../Javascript/jQuery.zySlide.js"></script>
<script type="text/javascript" src="../Javascript/HomePage.js"></script>	

</body>
</html>
