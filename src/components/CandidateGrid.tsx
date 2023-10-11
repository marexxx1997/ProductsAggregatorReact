import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidateCardContainer from "./CandidateCardContainer";
import CandidateCard from "./CandidateCard";
import { SortOption } from "./SortSelector";
import { fetchCandidates } from "../services/api-client";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import { receivedCandidates } from "../services/candidateSlice";

export interface Candidate {
  id: number;
  name: string;
  image_url: string;
  price: number;
}

interface Props {
  sortOrder?: SortOption;
  searchText: string;
  minFilterPrice: number | null;
  maxFilterPrice: number | null;
}

const CandidateGrid = ({
  sortOrder,
  searchText,
  minFilterPrice,
  maxFilterPrice,
}: Props) => {
  //   const [candidates, setCandidates] = useState<Candidate[]>([]);
  const dispatch = useAppDispatch();
  const candidates = useAppSelector((state) => state.candidates.candidates);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCandidates(searchText, minFilterPrice, maxFilterPrice, sortOrder)
      .then((sortedCandidates) => {
        // setCandidates(sortedCandidates);
        dispatch(receivedCandidates(sortedCandidates));
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [sortOrder, searchText, minFilterPrice, maxFilterPrice]);

  return (
    <>
      {error && <span>{error}</span>}

      <div className="bg-white ps-5">
        <div className="row">
          {candidates.length == 0 ? (
            <p className="pt-5 text-center fw-bold">No candidates found!</p>
          ) : (
            candidates.map((candidate) => 
                <CandidateCardContainer key={candidate.id}>
                  <CandidateCard candidate={candidate} />
                </CandidateCardContainer>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CandidateGrid;
