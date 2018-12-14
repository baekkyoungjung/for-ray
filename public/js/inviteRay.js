// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Fade from 'react-reveal/Fade';
// import Pulse from 'react-reveal/Pulse';
// import DayPicker from 'react-day-picker';
// import { s3Url, imgSize } from '../utils/declare-function';
const wHeight = window.innerHeight;

class InviteRay extends React.Component {

	constructor(props) {
		super(props);
		[
			'initRows',
			'pswpInit',
			'onHandleViewMode',
			'onHandleChange',
			'onHandleFiltering',
			// 'preLoadImg',
		].forEach(method => (this[method] = this[method].bind(this)));
		
		this.state = {
			isShowScroll: true,
			rows: this.initRows(),
			imgFiltering: {},
			viewMode: false,
			viewId: -1,
			imageFiltering: ['all'],
			// imgCategory: ['all', 'bk', 'bj'],
			// handleMoreLoading: false,
			// viewMode: false,
		};

	}

	componentDidMount() {
		const hall = new naver.maps.LatLng(37.5407383, 127.0692447,17);
		const map = new naver.maps.Map(document.getElementById('map'), {
			disableDoubleClickZoom: true,
			disableDoubleTapZoom: true,
			pinchZoom: false,
			draggable: false,
			scrollWheel: false,
		});
		map.setCenter(hall);
		var marker = new naver.maps.Marker({
		    position: new naver.maps.LatLng(37.5407383, 127.0692447,17),
		    map: map
		});

		setTimeout(() => {
			this.setState({
				isShowScroll: false,
			})
		}, 1300);

		// $.get('/day').done(dDay => {
		// 	$.getJSON('/img-filtering').done(imgFiltering => {
		// 		this.setState({
		// 			dDay,
		// 			imgFiltering: imgFiltering,
		// 		});
		// 	});
		// });
		setTimeout(() => {
			// window.initMap();
		}, 1000);
		// morePicClick();
		// scrollEvent();
	}

	componentDidUpdate(prevProps, prevState) {
	}

	initRows() {
		const newRows = [];
		const imgWidth = 1280;
		const imgHeight = 1920;
		let i = 1;
		for (i; i < 5; i += 1) {
			newRows.push({
				thumb: `./public/img/${i}.jpg`,
				org: `./public/img/${i}.jpg`,
				width: imgWidth,
				height: imgHeight,
			});
		};
		return newRows;
	}

	pswpInit(_id) {
		const pswpElement = document.querySelectorAll('.pswp')[0];
		let items = [];
		this.state.rows.map((item, i) => {
			items.push({
				w: item.width,
				h: item.height,
				src: item.org,
			});
		});
		const options = {
		    index: this.state.viewId,
		    closeEl: true,
		    captionEl: false,
		    fullscreenEl: false,
		    zoomEl: false,
		    shareEl: false,
		    counterEl: false,
		    arrowEl: true,
		    preloaderEl: false,
		    index: _id,
		};
		
		return new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	}

	onHandleChange(newViewId) {
		this.setState({
			viewId: newViewId,
		});
	}

	onHandleViewMode(_id = this.state.viewId) {
		const gallery = this.pswpInit(_id);
		gallery.init();
	}

	onHandleFiltering(filtering) {
		// const newImageFiltering = filtering;
		// newImageFiltering.includes(filtering) ? newImageFiltering.splice(newImageFiltering.indexOf(filtering), 1) : newImageFiltering.push(filtering);
		let newRows = this.initRows();
		if (filtering !== 'all') {
			newRows = this.state.imgFiltering[filtering];
		}

		this.setState({
			imageFiltering: filtering,
			rows: newRows
		});
	}

	render() {
		const { viewId, rows, viewMode } = this.state;
		return (
			<div>
				<div id="main-wrapper">
					<div
						id="invite-says"
						className="text-center trigger aoeu"
						style={{
							height: wHeight,
						}}
					>
						{/*<Fade
							top
							cascade
						>*/}
							<div className="contents">
								<div className="up-to-bottom">
									<h1>
									7년의 연애,
									<br/>
									그리고 결혼
									</h1>
								</div>
								<div className="bottom-to-up">
									
									<br/>
									2019.01.19 SAT 1:00PM

								</div>
							</div>
						{/*</Fade>*/}
						<div
							id="scroll-down"
							className={!this.state.isShowScroll ? 'opacity-0' : ''}
						/>
					</div>
					<div id="contents-wrapper">
						<div id="hello" className="container">
			                <div
			                	className="main-pic on-blur"
			                >
			                	{/*<Fade left duration={1200}>*/}
				        			<img
				        				src="./public/img/0.jpg"
				        				className="trigger img-responsive"
				        				alt="Img"
				        			/>
			        			{/*</Fade>*/}
			                </div>
			                <div
			                	style={{
			                		fontSize: '1.6em',
			                		marginTop: '60%',
			                		marginBottom: '60%',
			                	}}
			                >
								<p className="text-center">“ 세상에서 나를<br />가장 나 답게<br />만들어주는 사람 ”</p>
								<p className="text-center" style={{ marginTop: '20%', }}>이제는 그 사람과 평생을 함께하고 싶습니다.</p>
							</div>
						</div>
						<div
							id="who-we-are"
							className="contnainer"
							style={{
								paddingBottom: 60,
							}}
						>
							<div
			                	style={{
			                		fontSize: 25,
			                	}}
			                >
								<p className="text-center">
									<b>서명석</b> <b>김미숙</b>의 장남 <b>승원</b>
								</p>
								<p className="text-center">
									<b>김재태</b> <b>홍현미</b>의 장녀 <b>지원</b>
								</p>
							</div>
						</div>
			            <div id="when" className="container">
							{/*<h3><span>이 날</span>이에요.</h3>*/}
							<div
								style={{
									fontSize: 20,
									lineHeight: '1.5em',
									textAlign: 'center',
									marginBottom: 60,
									borderBottom: '1px solid #999',
									paddingLeft: 16,
									paddingRight: 16,
									paddingBottom: 16,
									display: 'inline-block',
								}}
							>
								일시: 2019년 1월 19일(토) 오후 1시<br/>
								장소: 건대입구 스타시티 아트홀 (5층)
							</div>
							<img
								src="./public/img/calendar.jpg"
								className="trigger img-responsive"
								alt="Img"
								style={{
									margin: 'auto',
								}}
							/>
							{/*<DayPicker
								modifiers={{ highlighted: new Date(2018, 3, 8) }}
								month={new Date(2018, 3)}
							/>*/}
							{/*<p>
								4월 8일 오후 3시 ~ 5시
							</p>*/}
							{/*<Pulse>*/}
							{/*<p>
								{`${this.props.dDay} 일 남았습니다. 두근두근`}
							</p>*/}
							{/*</Pulse>*/}
			            </div>
			            <div
			            	id="location"
			            	className="container"
			            	style={{
			            		marginTop: 45,
			            	}}
			            >
							<div id="map"></div>

			            	<div className="how-to-table" style={{ fontSize: 18, marginTop: 60, }}>
					            <div className="" style={{ textAlign: 'center', }}>
					            	<div className="text-center" style={{ fontSize: 22, borderBottom: '1px solid #999', paddingLeft: 16, paddingRight: 16, display: 'inline-block' }}>
					            		지하철
					            	</div>
					            	<div style={{ marginTop: 12, }}>2호선 건대입구역 (2번 출구), 7호선 건대입구역 (3번 출구) 도보 1분 거리 위치</div>
					            </div>
					            <div className="" style={{ marginTop: 30, textAlign: 'center', }}>
					            	<div className="text-center" style={{ fontSize: 22, borderBottom: '1px solid #999', paddingLeft: 16, paddingRight: 16, display: 'inline-block' }}>
						            	자가용
					            	</div>
					            	<div className="text-center" style={{ marginTop: 12, }}>
						            	서울 광진구 능동로 110 스타시티 영존 (서울 광진구 화양로 4-20 스타시티 영존)
					            		{/*<span className="text-bold color-seven-green">7호선</span> / <span className="text-bold color-bundang">분당선</span> 강남구청역 2번 출구 도보 7분 거리 내외
					            		<br />
					            		<span className="text-bold color-seven-green">7호선</span> 학동역 1번 출구 도보 10분 거리 내외*/}
					            	</div>
					            </div>
					            {/*<div className="">
					            	<div className="col-xs-3">
						            	버스
					            	</div>
					            	<div className="col-xs-9">
					            		<span className="color-green text-bold">지선</span>: 2011, 3414, 6411, 3219, 4412, 3412, 3422
					            		<br />
					            		<span className="color-blue text-bold">간선</span>: 141, 401, 640, 351, 472, 147, 301, 241B, 241A, 240
					            	</div>
					            </div>*/}
								<div className="" style={{ marginTop: 30, textAlign: 'center', }}>
					            	<div className="text-center" style={{ fontSize: 22, borderBottom: '1px solid #999', paddingLeft: 16, paddingRight: 16, display: 'inline-block' }}>
						            	주차안내
					            	</div>
					            	<div className="text-center" style={{ marginTop: 12, }}>
					            		스타시티 건물내 주차 (2시간 무료),  건대병원 주차 (1시간 30분 무료)
					            	</div>
					            </div>
					            
				            	<div
				            		style={{
				            			fontSize: 25,
				            			lineHeight: '1.5em',
				            			textAlign: 'center',
				            			marginTop: '30%',
				            			marginBottom: '30%',
				            		}}
				            	>
				            		축하 화환은 정중히 사양합니다.
				            		<br />
									좋은 마음만 감사히 받겠습니다.
								</div>
							</div>
			            </div>
			            <hr />
						<div id="memories" className="container">
							<h3>
								갤러리
							</h3>
							<div className="our-pic">
								{/*<button type="button" className="btn btn-default" onClick={this.onHandleFiltering.bind(null, 'all')}>함께</button>
								<button type="button" className="btn btn-default" onClick={this.onHandleFiltering.bind(null, 'bk')}>백경</button>
								<button type="button" className="btn btn-default" onClick={this.onHandleFiltering.bind(null, 'bj')}>봉주</button>*/}
								{/*<div id="gallery-view-mode">
									<div>
			    						<img
			    							className={`view-wedding-id-${viewId}`}
			    							src={`/images/wedding-select/bkbj-img-${viewId}.JPG`}
											alt="Image"
										/>
									</div>
								</div>*/}
								<div
									id="gallery-view-mode"
									// className={viewMode ? 'on-full' : 'on-hidden'}
									// onClick={this.onHandleViewMode.bind(null, viewId, 'gallery-view-mode')}
								>
									<div
										className="pswp"
										tabIndex="-1"
										role="dialog"
										aria-hidden="true"
									>
									    <div className="pswp__bg"></div>
									    <div className="pswp__scroll-wrap">
									        <div className="pswp__container">
									            <div className="pswp__item"></div>
									            <div className="pswp__item"></div>
									            <div className="pswp__item"></div>
									        </div>
									        <div className="pswp__ui pswp__ui--hidden">
									            <div className="pswp__top-bar">
									                <div className="pswp__counter"></div>
									                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
									                <button className="pswp__button pswp__button--share" title="Share"></button>
									                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
									                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
									                <div className="pswp__preloader">
									                    <div className="pswp__preloader__icn">
									                      <div className="pswp__preloader__cut">
									                        <div className="pswp__preloader__donut"></div>
									                      </div>
									                    </div>
									                </div>
									            </div>
									            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
									                <div className="pswp__share-tooltip"></div> 
									            </div>
									            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
									            </button>
									            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
									            </button>
									            <div className="pswp__caption">
									                <div className="pswp__caption__center"></div>
									            </div>
									        </div>
									    </div>
									</div>
								</div>
								<div id="thumbnail-camera-roll" className="row">
				                    {rows.map((item, i) => {
			                    		return (
					    					<div key={i} className="roll col-xs-3 col-sm-2 col-md-2">
							                    <span className="invite-wedding-imgs">
													<img
						    							onClick={this.onHandleViewMode.bind(null, i)}
						    							className={`trigger-img-thumb wedding-thumbnail-${i} img-responsive`}
						    							src={item.thumb}
														alt="Image"
													/>
					    						</span>
					    					</div>
		                    			)
			                    	})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<InviteRay />, document.getElementById('root'));