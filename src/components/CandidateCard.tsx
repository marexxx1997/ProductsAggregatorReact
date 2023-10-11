import { Card, Button, Elevation, H5, H6 } from "@blueprintjs/core";
import { Example, ExampleProps } from "@blueprintjs/docs-theme";
import { Candidate } from "../components/CandidateGrid";
interface Props {
  candidate: Candidate;
}
const CandidateCard = ({ candidate }: Props) => {
  return (
    <>
      <Card key={candidate.id}>
        <img src={candidate.image_url} />
        <H5>{candidate.name}</H5>
        <H6 className="price-heading">{candidate.price.toFixed(2)} KM</H6>
      </Card>
    </>
  );
};

export default CandidateCard;
