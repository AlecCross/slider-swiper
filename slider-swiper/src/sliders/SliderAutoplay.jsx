import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination'
import 'swiper/components/scrollbar'

function SliderAutoplay() {

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

  const images = ["https://bn1301files.storage.live.com/y4mIyFICCQ_K6jj7K0BHd_C4_TZ3IXM7gh3nctLnvFRjvovSWun-WKv4tDzy7SD0awK7z7ajgpyFssdRMFJx6GK3QcWDjAc3siuENmK1UTs8xwjbkxWZdAI-qo8a3vYx1xAXFivZIoUuJFYryhY4IjZQsbp6zLZLnuOKXfTUCgLacNqJZ5dXVaAgB10HUdblF-Y?width=1400&height=800&cropmode=none",
    "https://bn1301files.storage.live.com/y4mGjyhtjZGgG-YcHhqawiwhZfn0bpegVKN5IosGWsp09RRvcUj7VKVIBXPDV1B0NLIUMhQq4Qkm3sFbC5qmYo4tpDrHIT7HrmR36Lvocb8wkDjY0BhBvpbNLX6k4-JxMgod2eKil7TrsxJe9D_Iqp-nNXxQN0p61iKs-vnTJqChE14Cz6XuphJpsUrdLyBMN8x?width=660&height=440&cropmode=none",
    "https://bn1301files.storage.live.com/y4mYbpA6CA1FLnh0zYQlVVowYpbfOw03QJJq5CoLqPCaK0cjQ76YNP2zphgbb70IyWMKhyu6aAmEa1v7_DDPx2VqWxW3JYbbtbFAEwVwn4wMd8NQ5TWNUvKWsDCsXA4jKVuH5xdFsY1xbSPieNrP_gMOjbf7nSRWHoa4bK91umB2k7oFCjVcqWmQ8fhZzwlI2JI?width=1920&height=1080&cropmode=none",
    "https://bn1301files.storage.live.com/y4mwjz62nP_ULmRkyTOQN95B-b4W0UrVofrH1dyUvWK7rlaff3fcKt1Chu55KctkldrVjL3Q5fFLJmw0inEXZfuzWPnGVdaIX6Zpqr-0_M2g1ieYt7k2nuq4lXNhQpQCA_kUn9o-61Si37vsCMzVaZKTaFYDNrgXNK8BZbyTnDKcJQvXjpDynbvDsoLMWCMNkiP?width=660&height=346&cropmode=none"]

  return <>
    <h1 style={{ textAlign: "center" }}>Auto play slider</h1>
    <Swiper style={{ width: 500 }}
      autoplay={
        { delay: 7000 }
      }
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map(image => <SwiperSlide
        key={image}>
        <img
          style={{ height: 300 }}
          alt="Изображение"
          src={image} /></SwiperSlide>)}
    </Swiper>
  </>
}

export default SliderAutoplay
