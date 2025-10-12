# Rocket AI Coding Test

> **Next.js + Tailwind 기반 사주팔자 UI 구현 과제**  
> Figma 시안을 기준으로 **375px 디자인 비율을 유지하는 반응형 레이아웃**과  
> 로컬 폰트·SVG 커스텀 요소를 활용해 **정확한 시안 재현**에 집중한 퍼블리싱 프로젝트입니다.

🔗 **배포 URL:** [https://rocket-ai-coding-test-seven.vercel.app/](https://rocket-ai-coding-test-seven.vercel.app/)

---

## 프로젝트 개요

- **진행 기간:** 2025.10.02 ~ 2025.10.09 (1주일)  
- **프로젝트 유형:** Rocket AI 코딩 테스트 (개인)  
- **목표:**  
  - Figma 시안을 **픽셀 단위로 재현**하면서도,  
    화면 크기가 달라져도 **텍스트·이미지 배치가 안정적**으로 유지되도록 구현  
  - 모든 화면을 **독립 컴포넌트화**하여, **더미 데이터만으로도 렌더링 가능**  
  - Tailwind CSS 반응형 유틸리티로 **유사한 사용자 경험(UX)** 제공

---

## 기술 스택

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Custom CSS variables
- **Images/SVG:** `next/image`, React SVG Components  
- **Deploy:** Vercel  

---

## 주력 포인트

| 분야 | 핵심 구현 포인트 |
|---|---|
| 🧩 **컴포넌트 구조화** | `IntroSection`, `WaitingSection`, `ResultSection`, `Mansaeryeok` 등 화면 단위를 **독립 컴포넌트화**. 내부 데이터(사주·한자 등)는 **더미 데이터로도 교체 가능**하도록 설계. |
| 📱 **반응형 퍼블리싱(UX 안정)** | **375px 디자인 기준**으로 퍼블리싱, `max-w-md`(448px)로 폭 제한. Tailwind 반응형 단위를 활용해 **크기 변화에도 비슷한 사용자 경험 유지**. |
| ⚙️ **정확한 SVG 관리** | 말풍선·사다리꼴 등 장식을 **React SVG 컴포넌트로 직접 재구성**. `viewBox`, `preserveAspectRatio`, `filterUnits`를 조정해 **꼬리·블러 영역 왜곡 방지**. |
| 💬 **텍스트 배치 정밀도** | SVG/이미지 위 텍스트를 **절대배치 + `translate(-50%, -50%)`**로 중앙 고정, `line-height`·`letter-spacing` 파라미터화로 **문구 길이가 달라도 균형 유지**. |
| 📊 **테이블 퍼블리싱 디테일** | `ElementCell`(오행 셀), `RowHeadCell`(행 타이틀), `CellContent`(본문)를 **컴포넌트 분리**. 오행(`木·火·土·金·水`) 문자열을 자동 감지해 **배경색/텍스트색/보더를 동적 매핑**. 테이블의 `thead`·`tbody` 구분, 첫 열 고정폭, 얇은·두꺼운 보더 혼용은 **`globals.css`에서 픽셀 단위로 관리**해 시안과 동일한 구조를 재현. |

---


## 🌱 향후 개선

- 컨테이너 쿼리(`cq`) 적용으로 **디자인 비율 자동 스케일링** 고도화  
- 접근성(A11y) 보완 (`aria-label`, heading 구조 개선)  

---


## ✨ 제작자

**정혜지 (Hyeji Jeong)**  
Frontend Developer / UI Engineer  
> “컴포넌트화와 반응형 설계로, 시안의 구조와 사용자 경험까지 코드로 구현합니다.”
