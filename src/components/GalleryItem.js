import { Card, Image, Modal, Button } from "semantic-ui-react";

export default function GalleryItem(props) {
  return (
    <Card id={props.id}>
      <Image fluid src={props.src} alt={props.title} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className="date">Created</span>
        </Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Modal
          trigger={<Button>More Info</Button>}
          title={props.title}
          image={props.src}
          actions={["Snooze", { key: "done", content: "Done", positive: true }]}
        >
          <Modal.Header>{props.title}</Modal.Header>
          <Modal.Content image>
            <Image size="big" src={props.src} wrapped />
            <Modal.Description float="left">
              <p>{props.description}</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card.Content>
    </Card>
  );
}
