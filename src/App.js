import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function ColorSchemesExample() {
  return (
    <div className='wrap'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#About'>About</Nav.Link>
            <Nav.Link href='#Skill'>Skill</Nav.Link>
            <Nav.Link href='#Education'>Education</Nav.Link>
            <Nav.Link href='#work'>work</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='title' href='#home'>
        <h1>
          '우유(Mlik)'같은 인재 우유정<Badge bg='secondary'>New</Badge>
        </h1>
        <h4>프론트엔드 신입 </h4>
      </div>
      <div className='about' href='#About'>
        <Nav.Link href='#About'>
          <h2>About</h2>
        </Nav.Link>
        <div className='main-text'>
          <h3>'우유'같은 인재 우유정 입니다. </h3>
          <h6>
            우유는 생우유도 요거트로도 치즈로도 변신이 가능합니다. 지금은
            우유지만 저를 성장시켜 주실 회사에 입사하여 좀 더 성숙한 치즈와
            요거트가 되고싶습니다. 저는 무언가를 탐구하고 알아가는 것을
            좋아합니다. 무언가를 연구하고 고민 끝에 저만의 방식을 찾아 완성
            해내는 것이 특기입니다. 저에게는 무엇이든 주어진 일에 끈기를 가지고
            끝까지 해내는 성실함과 근성을 가 졌습니다. 또한 어디에 소속되어도 잘
            융합되는 우유처럼 그 안에서 한 몫을 할 수 있는 인재입니다. 저를
            성장시켜주실 이 회사에서 최선의 노력과 꾸준함으로 꼭 인정 받는
            사람이 되겠습니다.
          </h6>
        </div>
      </div>
      <div className='Education'>
        <div className='sub-text'>
          <h3>Education</h3>
          <p>2012.03 - 2015.02</p>
          <h6>신일여자중학교(미술중점)</h6>
          <p>2015.03 - 2018.02</p>
          <h6>신일여자고등학교(미술반)</h6>
          <p>2018.03 - 2022.02</p>
          <h6>동국대학교 경주캠퍼스 (미술학과)</h6>
          <p>2019.08 - 2020.02</p>
          <p>2022.04.25 - 2022.10.17</p>
          <h6>웹디자인&멀티미디어콘텐츠제작(세잔IT직업전문학교 수료)</h6>
        </div>
      </div>
      <div className='skill'>
        <h2>Skill</h2>
        <h5>What I have</h5>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>HTML</Accordion.Header>
            <Accordion.Body>
              웹 표준을 위해 HTML5에서 권장하는 마크업(Mark Up)방식과 시멘틱
              태그를 사용해 전체 레이아웃을 설계합니다. 웹 UI디자인 작업 후
              클래스 네임과 함께 HTML 정보구조 설계를 꼼꼼히 작업한 후 퍼블리싱
              작업을 진행합니다. 특히,웹사이트를 퍼블리싱 하기 전에
              '기능정의서'를 만들고 기능정의서에 전체적인 폰트서식, 컬러가이드,
              사이즈 정보, 상호작용 여부, HTML 와이어프레임까지 꼼꼼하게 미리
              정리해 놓고 체계적인 퍼블리싱 작업을 수행합니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>CSS(Responsive Web)</Accordion.Header>
            <Accordion.Body>
              웹표준을 준수하는 CSS코딩으로 크로스브라우징을 위해 안정적인
              CSS속성을 사용하여 HTML 엘리먼트를 배치하고 디자인합니다. 레이아웃
              배치를 위해 기존방식인 float, position을 활용하고 경우에 따라
              FLEX와 GRID를 사용해 배치합니다. 탭 메뉴와 아코디언과 같은
              상호적용 컨텐츠도 순수 사용해서 제작할 수 있습니다. 그리고 CSS
              선택작의 코딩 순서애 맞게 코딩하고 적절한 주석을 사용합니다.{" "}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>JAVA SCRIPT</Accordion.Header>
            <Accordion.Body>
              기본적으로 javascript는 ES6이상의 문법을 숙지하고 있으며
              퍼블리셔로서 알아야하는 기본적인 이미지 슬라이드, 마우스 휠,
              슬라이드 배너, 네비게이션, 탭 메뉴, 아코디언 등의 기본적인
              제이쿼리 기능을 사용할 줄 알며, 순수 바닐라 스크립트와 신
              ES6문법을 사용할 줄 압니다. 기초 문법과 제어문을 숙지, 객체와
              메소드 개념, 사용자정의 함수 등을 이해하고 있으며, 템플릿 모듈
              소스코드의 일부를 분석과 편집, 리뉴얼 하드코딩 작업이 가능합니다
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>DESIGN</Accordion.Header>
            <Accordion.Body>
              웹사이트 ui디자인 작업은 포토샵을 활용하여 웹 ui디자인 작업을 위한
              포토샵과 일러스트,XD 사용능력은 충분하다고 생각합니다. 또한 이벤트
              디자인, 배너 디자인을 위한 포토샵 일러스트 사용에 익숙합니다.
              영상편집으로는 컷편집, 자막, 트랜지션 등 기본적인 영상편집은
              프리미어를 활용할 수 있습니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='5'>
            <Accordion.Header>GitHub & bootstrap</Accordion.Header>
            <Accordion.Body>
              깃허브를 통해 프로젝트 코드를 관리해본 경험이 있으며 add, commit,
              pull, push, branch을 사용할 수 있습니다. 또한
              부트스트랩(react-bootstra도 가능)을 통해 레이아웃, 버튼, 입력창
              등의 디자인 사용이 가능합니다
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='6'>
            <Accordion.Header>TEXT EDITOR</Accordion.Header>
            <Accordion.Body>
              퍼블리셔, 개발자로서 텍스트 에디터는 Visual Studio Code를 메인으로
              사용하며 경우에 따라 Adobe를 병행해서
              사용합니다.비주얼스튜디오코드를 사용하 면서 작업속도를 위해
              단축키와 익스텐션을 적극 활용합니다.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='publishing'>
        <h2>Work</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=First slide&bg=373940'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=First slide&bg=373940'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=First slide&bg=373940'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=Second slide&bg=282c34'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/800x400?text=Third slide&bg=20232a'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='footer'>
        <h3>CONTACT</h3>
        <p>
          <br>Contact me on..</br>
          <br> wyoo0703@gmail.com </br>
          <br>github</br>
        </p>
      </div>
    </div>
  );
}

export default ColorSchemesExample;
