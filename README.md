# 🎂 포쿠트 생일초 계산기

## 📋 프로젝트 개요

**포쿠트 생일초 계산기**는 사용자가 태어난 지 몇 초가 지났는지, 심장은 몇 번 뛰었는지 등을 실시간으로 계산하고 보여주는 웹 애플리케이션입니다. 한국나이와 만 나이를 동시에 표시하며, 재미있는 통계를 제공합니다.

### 🌐 배포 URL
- **프로덕션:** https://www.pokoote.com

---

## ✨ 주요 기능

### ✅ 완성된 기능
1. **생년월일 입력** - 직관적인 날짜 선택기
2. **한국나이 & 만 나이 계산** - 두 가지 나이 체계 동시 표시
3. **실시간 시간 계산** - 초, 분, 시간, 일 단위로 실시간 업데이트
4. **재미있는 통계**
   - 심장 박동 수 (분당 70회 기준)
   - 수면 시간 (하루 8시간 기준)
   - 식사 횟수 (하루 3끼 기준)
   - 미소 횟수 (하루 20번 기준)
5. **SNS 공유 기능** - 페이스북, 트위터, 카카오톡, 링크 복사
6. **반응형 디자인** - 모바일, 태블릿, 데스크톱 완벽 지원
7. **SEO 최적화**
   - 메타 태그 (제목, 설명, 키워드)
   - 오픈 그래프 (Open Graph) 태그
   - 트위터 카드 (Twitter Card)
   - 구조화된 데이터 (JSON-LD)
   - Robots.txt 및 Sitemap.xml
8. **구글 애드센스 통합 준비**
   - 3개 광고 영역 (상단, 중간, 하단)
   - 반응형 광고 단위
   - 광고 코드 주석 처리 (승인 후 활성화 가능)
9. **개인정보 처리방침** - 애드센스 승인 필수 페이지

---

## 📁 프로젝트 구조

```
pokoote/
├── index.html              # 메인 페이지 (계산기)
├── privacy.html            # 개인정보 처리방침
├── robots.txt              # 검색엔진 크롤러 설정
├── sitemap.xml             # 사이트맵 (SEO)
├── css/
│   └── style.css           # 메인 스타일시트
└── js/
    └── main.js             # 메인 JavaScript
```

---

## 🔧 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)** - 바닐라 JS, 모던 문법

### 외부 라이브러리 (CDN)
- **Google Fonts** - Noto Sans KR
- **Font Awesome 6.4.0** - 아이콘

### SEO & Analytics
- **구조화된 데이터** - JSON-LD (Schema.org)
- **Open Graph** - 소셜 미디어 최적화
- **Google AdSense** - 광고 수익화 (승인 후 활성화)

---

## 🚀 배포 가이드 (www.pokoote.com)

### 📌 사전 준비사항

#### 1. 도메인 준비
- ✅ **도메인:** www.pokoote.com
- DNS 설정 완료 확인

#### 2. 호스팅 선택

다음 중 하나를 선택하세요:

**옵션 A: GitHub Pages (무료, 추천)**
- 무료 호스팅
- HTTPS 자동 지원
- 커스텀 도메인 연결 가능
- 99.9% 업타임 보장

**옵션 B: Netlify (무료, 추천)**
- 무료 호스팅
- 자동 HTTPS
- 커스텀 도메인 무료
- CI/CD 자동 배포

**옵션 C: Vercel (무료)**
- 무료 호스팅
- 빠른 속도
- 자동 배포

**옵션 D: 한국 웹호스팅 (유료)**
- Cafe24, 가비아, Hosting.kr 등
- 월 500원~3,000원
- 한국어 지원

---

### 🎯 배포 방법 1: GitHub Pages (추천)

#### Step 1: GitHub 저장소 생성

1. **GitHub 로그인**
   - https://github.com 접속
   - 계정이 없다면 가입

2. **새 저장소 생성**
   ```
   - 저장소 이름: pokoote
   - 공개 설정: Public
   - README 추가: 체크하지 않음
   ```

3. **파일 업로드**
   - 모든 프로젝트 파일을 저장소에 업로드
   - Commit 메시지: "Initial commit"

#### Step 2: GitHub Pages 활성화

1. **Settings → Pages**
   - Source: Deploy from a branch
   - Branch: main (또는 master)
   - Folder: / (root)
   - Save 클릭

2. **배포 확인**
   - 2~5분 대기
   - `https://[사용자명].github.io/pokoote` 에서 확인

#### Step 3: 커스텀 도메인 연결

1. **도메인 DNS 설정**
   
   도메인 관리 페이지(가비아, 후이즈 등)에서 다음 레코드 추가:

   ```
   A 레코드:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153

   CNAME 레코드:
   www → [사용자명].github.io
   ```

2. **GitHub Pages에 도메인 추가**
   - Settings → Pages → Custom domain
   - `www.pokoote.com` 입력
   - Save 클릭
   - Enforce HTTPS 체크

3. **CNAME 파일 생성**
   
   저장소 루트에 `CNAME` 파일 생성:
   ```
   www.pokoote.com
   ```

4. **배포 완료 확인** (24시간 이내)
   - https://www.pokoote.com 접속

---

### 🎯 배포 방법 2: Netlify (초간단)

#### Step 1: Netlify 가입 및 배포

1. **Netlify 접속**
   - https://app.netlify.com 방문
   - GitHub 계정으로 로그인

2. **사이트 배포**
   
   **방법 A: GitHub 연동 (자동 배포)**
   ```
   1. "Add new site" → "Import an existing project" 클릭
   2. GitHub 선택
   3. pokoote 저장소 선택
   4. Deploy 클릭
   5. 자동 빌드 및 배포 완료
   ```

   **방법 B: 드래그 앤 드롭 (수동 배포)**
   ```
   1. "Add new site" → "Deploy manually" 클릭
   2. 프로젝트 폴더를 드래그 앤 드롭
   3. 즉시 배포 완료
   ```

#### Step 2: 커스텀 도메인 연결

1. **Netlify에서 도메인 추가**
   ```
   Site settings → Domain management
   → Add custom domain
   → www.pokoote.com 입력
   ```

2. **DNS 설정**
   
   Netlify가 제공하는 네임서버로 변경하거나, 다음 레코드 추가:
   ```
   CNAME 레코드:
   www → [사이트명].netlify.app
   ```

3. **HTTPS 활성화**
   - SSL/TLS certificate → Verify DNS configuration
   - 자동으로 Let's Encrypt 인증서 발급

---

### 🎯 배포 방법 3: Vercel

#### Step 1: Vercel 배포

1. **Vercel 접속 및 로그인**
   - https://vercel.com
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   ```
   1. "Add New" → "Project" 클릭
   2. GitHub 저장소 선택
   3. Framework Preset: Other (정적 사이트)
   4. Deploy 클릭
   ```

#### Step 2: 커스텀 도메인 추가

1. **도메인 설정**
   ```
   Project Settings → Domains
   → Add 클릭
   → www.pokoote.com 입력
   ```

2. **DNS 레코드 추가**
   ```
   CNAME 레코드:
   www → cname.vercel-dns.com
   ```

---

### 🎯 배포 방법 4: 한국 웹호스팅

#### Cafe24 예시

1. **호스팅 신청**
   - https://www.cafe24.com
   - 웹호스팅 상품 선택 (월 500원~)
   - 도메인 연결

2. **FTP 업로드**
   ```
   FTP 클라이언트: FileZilla 사용
   호스트: ftp.pokoote.com
   사용자명: [cafe24 아이디]
   비밀번호: [cafe24 비밀번호]
   
   업로드 위치: /www 또는 /public_html
   ```

3. **파일 업로드**
   - 모든 프로젝트 파일 업로드
   - index.html이 루트에 위치하도록

4. **SSL 인증서 설치** (무료 - Let's Encrypt)
   - Cafe24 관리자 → SSL 관리
   - 무료 SSL 신청

---

## 🎨 구글 애드센스 설정

### Step 1: 애드센스 계정 생성

1. **가입**
   - https://www.google.com/adsense
   - "시작하기" 클릭
   - 웹사이트 URL: `www.pokoote.com`
   - 이메일 주소 입력

2. **결제 정보 등록**
   - 이름 및 주소 입력
   - 전화번호 인증

### Step 2: 사이트 연결

1. **애드센스 코드 받기**
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossorigin="anonymous"></script>
   ```

2. **index.html에 코드 추가**
   
   `<head>` 태그 안의 주석을 해제하고 실제 코드로 교체:
   ```html
   <!-- 현재 -->
   <!-- 
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_CLIENT_ID"
        crossorigin="anonymous"></script>
   -->

   <!-- 변경 후 (YOUR_ADSENSE_CLIENT_ID를 실제 ID로 교체) -->
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
        crossorigin="anonymous"></script>
   ```

### Step 3: 광고 단위 생성

1. **애드센스 대시보드**
   - 광고 → 광고 단위 기준
   - 디스플레이 광고 선택

2. **광고 크기 설정**
   ```
   상단 배너: 반응형 가로 배너
   중간 광고: 반응형 사각형
   하단 배너: 반응형 가로 배너
   ```

3. **광고 코드 삽입**
   
   index.html의 3개 광고 영역 주석을 해제하고 코드 교체:
   
   ```html
   <!-- 예시 -->
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-1234567890123456"
        data-ad-slot="9876543210"
        data-ad-format="horizontal"
        data-full-width-responsive="true"></ins>
   <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
   </script>
   ```

### Step 4: 승인 대기

- 심사 기간: 1~2주
- 승인 후 광고 자동 게재 시작

### ⚠️ 애드센스 승인 팁

1. **충분한 콘텐츠**
   - ✅ 현재 구조: 충분 (계산기 + FAQ + 개인정보처리방침)

2. **필수 페이지**
   - ✅ 개인정보 처리방침 (privacy.html)
   - ✅ 연락처 정보 (푸터에 포함)

3. **트래픽**
   - 하루 100~500명 방문자 추천
   - SEO 최적화로 자연스러운 유입

4. **정책 준수**
   - 불법 콘텐츠 없음 ✅
   - 저작권 침해 없음 ✅
   - 클릭 유도 없음 ✅

---

## 🔍 SEO 최적화 가이드

### 1. Google Search Console 등록

1. **Search Console 접속**
   - https://search.google.com/search-console

2. **속성 추가**
   - URL 접두어: `https://www.pokoote.com`
   - 소유권 확인 (HTML 파일 업로드 또는 메타태그)

3. **Sitemap 제출**
   - Sitemaps 메뉴
   - `https://www.pokoote.com/sitemap.xml` 제출

### 2. 네이버 서치어드바이저

1. **서치어드바이저 접속**
   - https://searchadvisor.naver.com

2. **사이트 등록**
   - 웹마스터 도구
   - `www.pokoote.com` 추가
   - HTML 파일로 소유권 확인

3. **사이트맵 제출**
   - `https://www.pokoote.com/sitemap.xml`

### 3. 키워드 최적화

현재 타겟 키워드:
- 한국나이 계산기
- 생일초 계산기
- 만 나이 계산
- 태어난지 몇 초
- 나이 계산기

### 4. 백링크 구축

- 네이버 블로그에 소개 글 작성
- 관련 커뮤니티에 유용한 정보로 공유
- SNS 공유 (인스타그램, 페이스북)

---

## 📊 트래픽 분석 설정

### Google Analytics 4 (GA4)

1. **GA4 계정 생성**
   - https://analytics.google.com
   - 새 속성 만들기

2. **추적 코드 추가**
   
   `index.html`의 `<head>` 태그 안에 추가:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🎯 마케팅 전략

### 1. 소셜 미디어 마케팅

- **인스타그램:** 재미있는 통계 이미지 제작
- **페이스북:** 나이 계산 챌린지
- **트위터:** 매일 재미있는 나이 관련 팩트 공유

### 2. 콘텐츠 마케팅

- **블로그 글 작성:** 한국나이 vs 만 나이 차이 설명
- **유튜브 쇼츠:** 계산기 사용법 짧은 영상
- **틱톡:** 나이 계산 챌린지

### 3. 커뮤니티 마케팅

- 에펨코리아, 클리앙, 디시인사이드 등에 유용한 도구로 소개
- 해외: Reddit, Hacker News (영문 버전 제작 시)

---

## 💰 수익 예상

### 애드센스 수익 계산

```
일 방문자 1,000명
페이지뷰 2,000회
광고 클릭률 (CTR) 1% = 20 클릭
클릭당 단가 (CPC) $0.20 = $4/일
월 수익: $4 x 30 = $120 (약 15만원)

일 방문자 10,000명
월 수익: $1,200 (약 150만원)
```

### 트래픽 목표

- **1개월:** 100명/일
- **3개월:** 500명/일
- **6개월:** 1,000명/일
- **1년:** 5,000~10,000명/일

---

## 🛠️ 유지보수

### 정기 업데이트

- **매주:** 트래픽 분석
- **매월:** SEO 순위 확인
- **분기별:** 콘텐츠 업데이트

### 기능 추가 아이디어

- [ ] 다국어 지원 (영어, 중국어, 일본어)
- [ ] PWA (Progressive Web App) 지원
- [ ] 다크모드
- [ ] 생일까지 남은 시간 계산
- [ ] 역사적 사건 비교 (내가 태어났을 때는?)
- [ ] 유명인과 나이 비교

---

## 📞 문의 및 지원

- **이메일:** contact@pokoote.com
- **웹사이트:** www.pokoote.com

---

## 📄 라이선스

© 2026 포쿠트 (Pokoote). All rights reserved.

---

## 🎉 배포 완료 체크리스트

배포 전 다음 항목들을 확인하세요:

### 필수 사항
- [ ] 도메인 연결 완료
- [ ] HTTPS 설정 완료
- [ ] 모든 파일 업로드 완료
- [ ] 웹사이트 정상 작동 확인
- [ ] 모바일 반응형 테스트
- [ ] 브라우저 호환성 테스트 (Chrome, Safari, Firefox, Edge)

### SEO 최적화
- [ ] Google Search Console 등록
- [ ] 네이버 서치어드바이저 등록
- [ ] Sitemap 제출
- [ ] Robots.txt 확인

### 애드센스
- [ ] 애드센스 계정 생성
- [ ] 사이트 연결 코드 삽입
- [ ] 광고 단위 생성 대기 (승인 후)
- [ ] 개인정보 처리방침 페이지 확인

### 분석 도구
- [ ] Google Analytics 설정
- [ ] 목표 전환 설정

---

## 🚀 다음 단계

1. **즉시 할 일**
   - ✅ 웹사이트 배포
   - ✅ 애드센스 신청
   - ✅ Search Console 등록

2. **1주일 내**
   - SNS 계정 생성
   - 첫 마케팅 포스트 작성
   - 네이버 블로그 홍보

3. **1개월 내**
   - 트래픽 분석
   - SEO 개선
   - 추가 기능 구현

---

**배포를 축하합니다! 🎉**

궁금한 점이 있으시면 언제든지 문의해주세요!