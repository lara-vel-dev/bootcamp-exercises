import { forwardRef, useImperativeHandle } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./slider.css";

const Slider = (props, ref) => {
  const [sliderRef, instanceRef] = useKeenSlider();

  useImperativeHandle(ref, () => {
    return {
      nextItem: instanceRef.current.next,
      prevItem: instanceRef.current.prev,
    };
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">React</div>
        <div className="keen-slider__slide number-slide2">Forward Refs</div>
        <div className="keen-slider__slide number-slide3">Exercise</div>
        <div className="keen-slider__slide number-slide4">:D</div>
      </div>
    </>
  );
};

export default forwardRef(Slider);
