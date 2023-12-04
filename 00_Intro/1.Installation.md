# Installation.md
- Node.js 설치 방법 안내

- JavaScript는 브라우저 환경에서 기본적으로 사용 가능하지만, 서버 사이드 개발이나 커맨드 라인 도구로 JavaScript를 사용하기 위해서는 Node.js를 설치해야 합니다. 다음은 Windows, macOS, Ubuntu 운영 체제별 Node.js 설치 방법입니다.

# Windows에서 Node.js 설치하기
- Node.js 공식 웹사이트 방문: Node.js 공식 웹사이트에 접속합니다.
- LTS 버전 다운로드: 홈페이지에서 "LTS" 버전의 Windows Installer를 선택하여 다운로드합니다.
- 설치 프로그램 실행: 다운로드한 .msi 파일을 실행합니다.
- 설치 과정 진행: 설치 마법사의 지시에 따라 설치를 진행합니다. 기본 옵션으로 설치하는 것이 일반적입니다.
- 설치 확인: 설치가 완료된 후, 터미널(명령 프롬프트)을 열고 node -v 명령어를 입력하여 설치된 Node.js의 버전을 확인합니다.


# macOS에서 Node.js 설치하기
- Node.js 공식 웹사이트 방문: Node.js 공식 웹사이트에 접속합니다.
- LTS 버전 다운로드: 홈페이지에서 "LTS" 버전의 macOS Installer를 선택하여 다운로드합니다.
- 설치 프로그램 실행: 다운로드한 .pkg 파일을 실행합니다.
- 설치 과정 진행: 설치 프로그램의 지시에 따라 설치를 진행합니다. 관리자 권한이 필요할 수 있습니다.
- 설치 확인: 설치가 완료된 후, 터미널을 열고 node -v 명령어를 입력하여 설치된 Node.js의 버전을 확인합니다.


# Ubuntu에서 Node.js 설치하기
- Ubuntu에서 Node.js를 설치하는 가장 간단한 방법은 apt 패키지 매니저를 사용하는 것입니다.
- 터미널 열기: Ubuntu에서 터미널을 엽니다.
- Node.js 저장소 추가: 최신 버전의 Node.js를 설치하기 위해 NodeSource 저장소를 추가합니다. 터미널에 다음 명령어를 입력합니다:
    - curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
- Node.js 설치: 저장소를 추가한 후, 다음 명령어로 Node.js를 설치합니다:
    - sudo apt-get install -y nodejs
- 설치 확인: 설치가 완료되면, node -v 명령어를 입력하여 설치된 Node.js의 버전을 확인합니다.
- 이제 Node.js가 성공적으로 설치되었으며, JavaScript 코드를 서버 사이드 환경에서 실행할 수 있게 되었습니다.
