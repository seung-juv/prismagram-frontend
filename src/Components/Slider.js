import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Files = styled(Swiper)`
  height: 614px;
`;

const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: opacity .5s linear;
`;

export default ({ files }) =>
  <Files navigation pagination={{ clickable: true }}>
    {files &&
      files.map((file, index) =>
        <SwiperSlide id={file.id} key={index}>
          <File src={file.url} />
        </SwiperSlide>
      )}
  </Files>;
