import React from 'react' 
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import cat from './cat.png'
import four from './404.png'
import contact from './contact.png'
import email from './email.png'
import git from './github.png'
import laptop from './laptop.png'
import pic from './LEARN_Aug_2019_Conor1.jpg'
import linked from './linkedIn.png'
import person from './person.png'
import tools from './tools.png'
import turntable from './turntable.png'



class App extends React.Component {
  render() {
    return (
      <div id ="App">
      <center>
      
        <Navbar bg="dark" expand="lg" fixed = 'top'>
          <Navbar.Brand href="#home">Conor Preston</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href='/conor_preston_resume.pdf'  target = '_blank' rel = 'noopener noreferrer'>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
        <Container>
        <Container>
            <Jumbotron bg="dark-grays">
              <Container>
                <Row>
                  <Col>
                    <h1 bsPrefix = 'welcome'>Conor Preston</h1><br/>
                    <Image height = '300px' src={pic} rounded />
                  </Col>
                  </Row>
                </Container>
              </Jumbotron>
              
              <Jumbotron>
                <Container>
                <h2 id = 'about'>About me</h2><br/>
                <Image src={person} height="100px" /><br/><br/><br/>
                  <p>Passionate about technology and the idea of constant learning, my career focus is dedicated to the technology community. Hello, my name is Conor Preston. LEARN Academy is a San Diego based development bootcamp that has provided me with 480+ hours on hands-on development experience in solo, pair and mob-programming. With four years of professional experience in logistics, procurement, service and customer service, I have gained skills that can be directly used in the technology community.
                  </p>
                    
                </Container>
              </Jumbotron>
              
              <Jumbotron>
               <Container>
                 <h2 id = 'skills'>Skills</h2><br/>
                 <Image height = '100px' src = {tools} /><br/><br/><br/>
                 
                 <Row>
                  <Col>
                  <ListGroup>
                    <ListGroup.Item>Programming Languages:<br/>Javascript || Ruby || HTML || CSS</ListGroup.Item>
                    <ListGroup.Item>Frameworks & Libraries:<br/> React || Rails || React-Native || Node || Express || Angular</ListGroup.Item>
                    <ListGroup.Item>Applications:<br/>Git/Github || AWS || Postman || Sourcetree</ListGroup.Item>
                    <ListGroup.Item>Databases:<br/>PostgreSQL || MongoDB</ListGroup.Item>
                  </ListGroup>
                  </Col>
                  <Col>
                  <ListGroup>
                    <ListGroup.Item>Organizational:<br/>Research || Time Management || Planning </ListGroup.Item>
                    <ListGroup.Item>Communication:<br/>Written || Verbal || Active Listening</ListGroup.Item>
                    <ListGroup.Item>Interpersonal:<br/>Compassion || Co-Operation || Integrity </ListGroup.Item>
                    <ListGroup.Item>Personal:<br/>Motivation || Accountability || Confidence </ListGroup.Item>
                  </ListGroup>
                  </Col>
                  </Row>
                </Container>
              </Jumbotron>
              
              <Jumbotron>
                 <Container>
                   <h2 id = 'projects'>Projects</h2><br/>
                    <Image height = '150px' src = {laptop} /><br/><br/>
                  
                  <CardGroup>
                    <Card style={{ width: '18rem' }} bg='dark'>
                      <Card.Img variant="top" src= {turntable}/>
                      <Card.Body>
                        <Card.Title>Vinyl Tracker</Card.Title>
                        <Card.Text>
                          This is a project using a Rails API that was communicated with via Postman.
                        </Card.Text>
                        <a href = "https://github.com/conorpreston13/vinyl_tracker_backend" target ="_blank" rel ="noopener noreferrer">
                          <Button variant="dark" onclick="https://github.com/conorpreston13/vinyl_tracker_backend">View Vinyl Tracker Code</Button>
                        </a>
                      </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '18rem' }} bg='dark'>
                      <Card.Img variant="top" src= { cat } />
                      <Card.Body>
                        <Card.Title>Cat Tinder</Card.Title>
                        <Card.Text>
                          Cat Tinder is an application that shows, creates and deletes cat profiles. It was created using a Ruby on Rails API, React.js and testing using Enzyme.
                        </Card.Text>
                        <a href = "https://github.com/conorpreston13/cat-dog-tinder-jon-conor" target ="_blank" rel ="noopener noreferrer">
                        <Button variant="dark" onclick="https://github.com/conorpreston13/cat-dog-tinder-jon-conor">View Cat Tinder Code</Button>
                        </a>
                      </Card.Body>
                    </Card> 
                    
                    <Card style={{ width: '18rem' }} bg='dark'>
                      <Card.Img variant="top" src= { four } />
                      <Card.Body>
                        <Card.Title>Get Down</Card.Title>
                        <Card.Text>
                          Here is a group project that was built with React-in-Rails. This is an app for on-demand gatherings with friends or other nearby parties.
                        </Card.Text>
                        <a href = "https://github.com/conorpreston13/Get-Down" target ="_blank" rel ="noopener noreferrer">
                          <Button variant="dark" onclick="https://github.com/conorpreston13/Get-Down">View Get Down Code</Button>
                        </a>
                      </Card.Body>
                    </Card>
                    
                  </CardGroup>
                  </Container>
              </Jumbotron>
            
              <Jumbotron>
                <h2 id = 'contact'>Get in Touch</h2><br/>
                <Image height = '100px' src = {contact} /><br/><br/><br/><br/>
                <Container>
                
                <Row>
                <Col>
                <Image height = '80px' src = { email } />
                  <p>preston386@gmail.com</p>
                  
                  </Col>
                  <Col>
                    <a href = 'https://www.linkedin.com/' target = '_blank' rel = 'noopener noreferrer'>
                      <Image height = '80px' src={linked} onclick = 'https://www.linkedin.com/conorpreston'  rounded />
                    </a>
                    <p>/conorpreston</p>
                    </Col>
                    <Col>
                      <a href = 'https://www.github.com/conorpreston13' target = '_blank' rel = 'noopener noreferrer'>
                      <Image height = '80px' src={git} rounded />
                      </a>
                      <p>/conorpreston13</p>
                    </Col>
                </Row>
                </Container>
              </Jumbotron>
              <Jumbotron>
                  <h5>Made with React.js</h5>
                  <h5>© Conor Preston 2019</h5>
              </Jumbotron>
              
      </Container>
      </Container>
      </center>
      
      </div>
      
      
      
    );
  }
}
export default App;