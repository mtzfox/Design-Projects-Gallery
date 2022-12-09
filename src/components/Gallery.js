import React from "react";
import { Segment, Container, Card, Header } from "semantic-ui-react";
import GalleryItem from "./GalleryItem";
import galleryItems from "./galleryItems";

export default function Gallery() {
  return (
    <div className="Gallery">
      <Segment.Group>
        <Segment>
          <Container fluid textAlign="center">
            <Header as="h1">Design examples</Header>
          </Container>
        </Segment>
        <Segment>
          <Card.Group centered itemsPerRow={3} stackable>
            {galleryItems.map(({ ...props }) => (
              <GalleryItem key={props.id} {...props} />
            ))}
          </Card.Group>
        </Segment>
      </Segment.Group>
    </div>
  );
}
