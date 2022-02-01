import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 0;
    grid-template-columns: 3fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 3fr 2fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    margin-right: 8px;
    padding-right: 8px;
  }
`;

const SecondaryStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const OpinionStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    @media ${QUERIES.tabletOnly} {
      border-bottom: none;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
