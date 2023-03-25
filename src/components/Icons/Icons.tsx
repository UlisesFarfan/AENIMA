export default function Icons(props: {
  name: string;
}) {

  if (props.name === "location") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="iconLocate" viewBox="0 0 23.8 34">
        <g id="ic_pin" transform="translate(-139 -252.056)">
          <path id="ic_place_24px" d="M16.9,2A11.891,11.891,0,0,0,5,13.9C5,22.825,16.9,36,16.9,36S28.8,22.825,28.8,13.9A11.891,11.891,0,0,0,16.9,2Zm0,16.15a4.25,4.25,0,1,1,4.25-4.25A4.252,4.252,0,0,1,16.9,18.15Z" transform="translate(134 250.056)" fill="#fff" />
        </g>
      </svg>
    )
  }
  if (props.name === "arrow") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 6 10">
        <g id="arrow" transform="translate(-1644 -501)">
          <path id="arrow-2" data-name="arrow" d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z" transform="translate(1644 511) rotate(-90)" fill="#fff" />
        </g>
      </svg>
    )
  }
  if (props.name === "facebook") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.001" viewBox="0 0 16 16.001">
        <g id="facebook" transform="translate(-1250 -2006)">
          <rect id="Rectángulo_392" data-name="Rectángulo 392" width="16" height="16" transform="translate(1250 2006)" fill="none" />
          <path id="Trazado_1" data-name="Trazado 1" d="M85.422,16V8.711h2.489l.356-2.844H85.422V4.089c0-.8.267-1.422,1.422-1.422h1.511V.089C88,.089,87.111,0,86.133,0a3.431,3.431,0,0,0-3.644,3.733V5.867H80V8.711h2.489V16Z" transform="translate(1174 2006.001)" fill="#fff" fillRule="evenodd" />
        </g>
      </svg>
    )
  }
  if (props.name === "instagram") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g id="instagram" transform="translate(-1170 -2006)">
          <path id="Trazado_3" data-name="Trazado 3" d="M8,1.422a24.53,24.53,0,0,1,3.2.089,4.123,4.123,0,0,1,1.511.267,3.122,3.122,0,0,1,1.511,1.511A4.123,4.123,0,0,1,14.489,4.8c0,.8.089,1.067.089,3.2a24.53,24.53,0,0,1-.089,3.2,4.123,4.123,0,0,1-.267,1.511,3.122,3.122,0,0,1-1.511,1.511,4.123,4.123,0,0,1-1.511.267c-.8,0-1.067.089-3.2.089a24.53,24.53,0,0,1-3.2-.089,4.123,4.123,0,0,1-1.511-.267,3.122,3.122,0,0,1-1.511-1.511A4.123,4.123,0,0,1,1.511,11.2c0-.8-.089-1.067-.089-3.2a24.53,24.53,0,0,1,.089-3.2,4.123,4.123,0,0,1,.267-1.511A3.192,3.192,0,0,1,2.4,2.4a1.5,1.5,0,0,1,.889-.622A4.123,4.123,0,0,1,4.8,1.511,24.53,24.53,0,0,1,8,1.422M8,0A26.264,26.264,0,0,0,4.711.089,5.488,5.488,0,0,0,2.756.444a3.48,3.48,0,0,0-1.422.889A3.48,3.48,0,0,0,.444,2.756,4.05,4.05,0,0,0,.089,4.711,26.264,26.264,0,0,0,0,8a26.264,26.264,0,0,0,.089,3.289,5.488,5.488,0,0,0,.356,1.956,3.48,3.48,0,0,0,.889,1.422,3.48,3.48,0,0,0,1.422.889,5.488,5.488,0,0,0,1.956.356A26.264,26.264,0,0,0,8,16a26.264,26.264,0,0,0,3.289-.089,5.488,5.488,0,0,0,1.956-.356,3.729,3.729,0,0,0,2.311-2.311,5.488,5.488,0,0,0,.356-1.956C15.911,10.4,16,10.133,16,8a26.264,26.264,0,0,0-.089-3.289,5.488,5.488,0,0,0-.356-1.956,3.48,3.48,0,0,0-.889-1.422A3.48,3.48,0,0,0,13.244.444,5.488,5.488,0,0,0,11.289.089,26.264,26.264,0,0,0,8,0M8,3.911A4.023,4.023,0,0,0,3.911,8,4.089,4.089,0,1,0,8,3.911m0,6.756A2.619,2.619,0,0,1,5.333,8,2.619,2.619,0,0,1,8,5.333,2.619,2.619,0,0,1,10.667,8,2.619,2.619,0,0,1,8,10.667m4.267-7.911a.978.978,0,1,0,.978.978.986.986,0,0,0-.978-.978" transform="translate(1170 2006)" fill="#fff" fillRule="evenodd" />
        </g>
      </svg>
    )
  }
  if (props.name === "time") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g id="time" transform="translate(-274 -998)">
          <path id="Trazado_5" data-name="Trazado 5" d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6.018,6.018,0,0,1,8,14ZM9,7.6l2.7,2.7-1.4,1.4L7,8.4V3H9Z" transform="translate(274 998)" fill="#cbd0d3" />
        </g>
      </svg>
    )
  }
  if (props.name === "hamburger") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="14" viewBox="0 0 20 14"><defs><style>.a{"fill:none;"}.b{"clip-path:url(#a);"}.c{"fill:#2a3037;"}</style><clipPath id="a"><rect className="a" width="20" height="14" /></clipPath></defs><g className="b"><rect className="c" width="20" height="2" transform="translate(0 12)" /><rect className="c" width="20" height="2" transform="translate(0 6)" /><rect className="c" width="20" height="2" /></g></svg>
    )
  }
  if (props.name === "no") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
    )
  }
  return (
    <div>
      none
    </div>
  )
}