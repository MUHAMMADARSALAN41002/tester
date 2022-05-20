import { Card, Avatar } from "antd";
import "./Cardcss.css";
import smit from '../../images/smit.jpg'

const { Meta } = Card;

const Customcard = () => {

  return (
  <>
    <Card
      style={{width: 350}}
      cover={
        <img
          alt="example"
          src={smit}
        />
      }
    >
      <Meta
        avatar={<Avatar src={smit} />}
        title="SAYLANI MASS IT TRAINING"
        description="Saylani Mass IT Training Program. To Train 10 Thousand Developers in Pakistan"
      />
    </Card>
  </>
  );
};
export default Customcard;
