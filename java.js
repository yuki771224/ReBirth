//画面サイズを取得する
function getScreenSize() {
	var s = "横幅 = " + window.parent.screen.width + " / 高さ = " + window.parent.screen.height;
	document.getElementById("ScrSize").innerHTML = s;
}

//ウィンドウサイズを取得する
function getWindowSize() {
	var sW,sH,s;
	sW = window.innerWidth;
	sH = window.innerHeight;

	s = "横幅 = " + sW + " / 高さ = " + sH;
 
	document.getElementById("WinSize").innerHTML = s;
}


//ウィンドウサイズ変更時に更新
window.onresize = window_load;

//サイズの表示
function window_load() {
	document.winsize.sw.value = window.innerWidth;
	document.winsize.sh.value = window.innerHeight;
}



const targets = document.querySelectorAll('[data-animate="fade"]');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target); // 一度だけアニメーション
    }
  });
}, {
  threshold: 0.5
});

targets.forEach(target => {
	target.classList.add("fade-target");
	observer.observe(target);
});
