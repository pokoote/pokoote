/**
 * 포쿠테 생일초 계산기 - 메인 JavaScript
 * www.pokoote.com
 */

// 전역 변수
let birthDate = null;
let updateInterval = null;

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 날짜 입력 필드 최대값 설정 (오늘 날짜)
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('birthdate').max = today;

    // 계산 버튼 이벤트 리스너
    document.getElementById('calculate-btn').addEventListener('click', calculate);

    // Enter 키로 계산 실행
    document.getElementById('birthdate').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculate();
        }
    });

    // 페이지 가시성 변경 시 업데이트 최적화
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (updateInterval) {
                clearInterval(updateInterval);
            }
        } else {
            if (birthDate) {
                startRealTimeUpdate();
            }
        }
    });
});

/**
 * 메인 계산 함수
 */
function calculate() {
    const birthdateInput = document.getElementById('birthdate').value;
    
    if (!birthdateInput) {
        alert('생년월일을 선택해주세요!');
        return;
    }

    // 생년월일 저장
    birthDate = new Date(birthdateInput);
    
    // 미래 날짜 체크
    if (birthDate > new Date()) {
        alert('미래 날짜는 선택할 수 없습니다!');
        return;
    }

    // 결과 섹션 표시
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    // 스크롤 이동
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // 나이 계산 및 표시
    calculateAges();

    // 실시간 업데이트 시작
    startRealTimeUpdate();
}

/**
 * 한국나이와 만 나이 계산
 */
function calculateAges() {
    const today = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = today.getFullYear();

    // 한국나이 계산 (현재 년도 - 태어난 년도 + 1)
    const koreanAge = currentYear - birthYear + 1;

    // 만 나이 계산
    let internationalAge = currentYear - birthYear;
    const currentMonth = today.getMonth();
    const birthMonth = birthDate.getMonth();
    const currentDay = today.getDate();
    const birthDay = birthDate.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        internationalAge--;
    }

    // 나이 표시
    document.getElementById('korean-age').textContent = koreanAge.toLocaleString();
    document.getElementById('international-age').textContent = internationalAge.toLocaleString();
}

/**
 * 실시간 업데이트 시작
 */
function startRealTimeUpdate() {
    // 기존 인터벌 정리
    if (updateInterval) {
        clearInterval(updateInterval);
    }

    // 즉시 한 번 실행
    updateAllValues();

    // 1초마다 업데이트
    updateInterval = setInterval(updateAllValues, 1000);
}

/**
 * 모든 값 업데이트
 */
function updateAllValues() {
    const now = new Date();
    const diffMs = now - birthDate;

    // 초, 분, 시간, 일 계산
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // 시간 정보 업데이트
    animateValue('seconds', seconds);
    animateValue('minutes', minutes);
    animateValue('hours', hours);
    animateValue('days', days);

    // 통계 계산 및 업데이트
    updateStatistics(seconds, minutes, hours, days);
}

/**
 * 통계 업데이트
 */
function updateStatistics(seconds, minutes, hours, days) {
    // 심장 박동 (분당 평균 70회)
    const heartbeats = minutes * 70;
    animateValue('heartbeats', heartbeats);

    // 수면 시간 (하루 8시간 기준)
    const sleepHours = Math.floor(days * 8);
    document.getElementById('sleep-hours').textContent = sleepHours.toLocaleString() + '시간';

    // 식사 횟수 (하루 3끼 기준)
    const meals = days * 3;
    animateValue('meals', meals);

    // 미소 횟수 (하루 평균 20번 기준)
    const smiles = days * 20;
    animateValue('smiles', smiles);
}

/**
 * 숫자 애니메이션 효과
 */
function animateValue(elementId, value) {
    const element = document.getElementById(elementId);
    const formattedValue = value.toLocaleString();
    
    // 값이 변경된 경우만 업데이트
    if (element.textContent !== formattedValue) {
        element.style.transform = 'scale(1.1)';
        element.textContent = formattedValue;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }
}

/**
 * 페이스북 공유
 */
function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

/**
 * 트위터 공유
 */
function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('내가 태어난 지 몇 초인지 확인해보세요! 한국나이 생일초 계산기 - 포쿠테');
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

/**
 * 카카오톡 공유
 */
function shareToKakao() {
    // 카카오톡 공유는 Kakao SDK가 필요합니다
    // 현재는 클립보드 복사로 대체
    const shareText = `내가 태어난 지 몇 초인지 확인해보세요!\n한국나이 생일초 계산기 - 포쿠테\n${window.location.href}`;
    
    if (navigator.share) {
        // Web Share API 지원 (모바일)
        navigator.share({
            title: '한국나이 생일초 계산기',
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('공유 취소:', err);
        });
    } else {
        // 클립보드 복사로 대체
        copyToClipboard(shareText);
        alert('카카오톡으로 공유할 텍스트가 복사되었습니다!\n카카오톡에 붙여넣기 해주세요.');
    }
}

/**
 * 링크 복사
 */
function copyLink() {
    const url = window.location.href;
    copyToClipboard(url);
    
    // 시각적 피드백
    const btn = event.target.closest('.share-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> 복사 완료!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 2000);
}

/**
 * 클립보드에 텍스트 복사
 */
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('클립보드 복사 성공');
        }).catch(err => {
            console.error('클립보드 복사 실패:', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

/**
 * 클립보드 복사 대체 방법
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        console.log('클립보드 복사 성공 (대체 방법)');
    } catch (err) {
        console.error('클립보드 복사 실패:', err);
    }
    
    document.body.removeChild(textArea);
}

/**
 * 페이지 언로드 시 인터벌 정리
 */
window.addEventListener('beforeunload', function() {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});

/**
 * Google Analytics 이벤트 추적 (선택사항)
 */
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// 계산 실행 시 이벤트 추적
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', function() {
        trackEvent('Calculator', 'Calculate', 'Birthday Seconds');
    });
});

/**
 * 서비스 워커 등록 (PWA - 선택사항)
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // 서비스 워커가 있는 경우에만 등록
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker 등록 성공:', reg))
        //     .catch(err => console.log('Service Worker 등록 실패:', err));
    });
}

/**
 * 다크모드 지원 (선택사항)
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// 다크모드 설정 불러오기
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

/**
 * 스크롤 애니메이션
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 대상 요소 관찰
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .faq-item, .stat-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/**
 * 성능 최적화: 디바운스 함수
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 에러 핸들링
 */
window.addEventListener('error', function(e) {
    console.error('에러 발생:', e.message);
    // 에러를 사용자에게 표시하지 않고 조용히 로깅
});

// 콘솔 메시지
console.log('%c포쿠테 생일초 계산기', 'color: #8b5cf6; font-size: 24px; font-weight: bold;');
console.log('%cwww.pokoote.com', 'color: #6366f1; font-size: 16px;');
console.log('Made with ❤️ in Korea');
