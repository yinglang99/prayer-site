// 获取页面元素
const prayBtn = document.getElementById('prayBtn');
const daysSpan = document.getElementById('days');

// 从本地存储读取数据
let prayData = JSON.parse(localStorage.getItem('prayData')) || {
  lastDate: '',
  streak: 0
};

// 更新显示
daysSpan.textContent = prayData.streak;

// 按钮点击事件
prayBtn.addEventListener('click', () => {
  const today = new Date().toLocaleDateString();
  
  if (today !== prayData.lastDate) {
    prayData.streak += 1;
    prayData.lastDate = today;
    localStorage.setItem('prayData', JSON.stringify(prayData));
    daysSpan.textContent = prayData.streak;
    alert('打卡成功！✨');
  } else {
    alert('今天已经祈祷过了哦～');
  }
});

// 初始化粒子效果
particlesJS('particles-js', {
  particles: {
    number: { value: 30 },
    color: { value: '#ffffff' },
    shape: { type: 'image', image: { src: 'https://www.svgrepo.com/show/306675/sakura.svg', width: 20, height: 20 } },
    opacity: { value: 0.5 },
    size: { value: 10 },
    move: { speed: 1 }
  }
});