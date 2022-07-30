import { Card, Col, Container, Image, Row } from "react-bootstrap";
import datas from '../question_4.data.json';

function Posts() {
  return (
    <Container id="posts">
      <Row>
        {datas.map(function (data) {
          return (
            <Col md='6' lg='4'>
              <Card className="mb-3">
                <a href={data.postUrl}>
                  <Card.Img variant="top" className="p-3" src={data.media[0].url} />
                </a>
                <a href={data.account.url}>
                  <Card className="account mx-3 py-1 px-3 gap-2 d-flex align-items-center flex-row">
                    <Image roundedCircle src={data.account.profileImage} width='56'>
                    </Image>
                    {data.account.handle}
                    <div className="account-detail d-flex flex-column justify-content-center px-4 py-2">
                      <div className="d-flex gap-2 my-2 align-items-center">
                        <Image src="assets/follower.png" width='33'></Image>
                        {data.account.subscriberCount}
                      </div>
                      <div className="d-flex gap-2 my-2 align-items-center">
                        <Image src="assets/userid.png" width='33'></Image>
                        {data.account.id}
                      </div>
                    </div>
                  </Card>
                </a>
                <Card.Body>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex gap-2 justify-content-end align-items-center">
                  <Image src="assets/heart.png" width='20'></Image>
                  {data.statistics.actual.favoriteCount}
                  <Image src="assets/comment.png" width='20'></Image>
                  {data.statistics.actual.commentCount}
                  <p className="ms-3 mb-0">
                    {data.date}
                  </p>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container >
  )
}

export default Posts;