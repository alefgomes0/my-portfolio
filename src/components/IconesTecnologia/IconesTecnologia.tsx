import { useState } from "react";

type IconesTecnologiaProps = {
  isDesktop: boolean;
};

export const IconesTecnologia = (props: IconesTecnologiaProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2 md:gap-8 row-start-2 row-end-3 p-4 opacity-80">
      <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-[metropolisregular]">
        Tecnologias
      </h2>
      <div className="grid auto-rows-min grid-cols-4 gap-2 md:gap-4">
        <svg
          onMouseEnter={() => setHoveredIcon(0)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 128 128"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 0 ? "#E44D26" : "currentColor"}`}
            d="m19.569 27l8.087 89.919l36.289 9.682l36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231l-2.615 28.909l-.192 1.69L64 106.964v-.005l-.027.012l-22.777-5.916L39.65 84h11.168l.791 8.46l12.385 3.139l.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911l3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"
          />
        </svg>
        <svg
          onMouseEnter={() => setHoveredIcon(1)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 128 128"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 1 ? "#0277BD" : "currentColor"}`}
            d="m19.67 26l8.069 90.493l36.206 10.05l36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015l-22.719-6.225L39.726 83h11.141l.79 8.766l12.347 3.295l-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355l-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589l-.506-6.03L36.235 43h55.597l-.267 3.334l-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"
          />
        </svg>
        <svg
          onMouseEnter={() => setHoveredIcon(2)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 24 24"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 2 ? "#38bdf8" : "currentColor"}`}
            d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"
          />
        </svg>
        <svg
          onMouseEnter={() => setHoveredIcon(3)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 24 24"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 3 ? "#F7DF1E" : "currentColor"}`}
            d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179l.004-.056z"
          />
        </svg>
        <svg
          onMouseEnter={() => setHoveredIcon(4)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 24 24"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 4 ? "#007acc" : "currentColor"}`}
            d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361a5.093 5.093 0 0 0-.717-.26a5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529c.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416c.47.197.892.407 1.266.628c.374.222.695.473.963.753c.268.279.472.598.614.957c.142.359.214.776.214 1.253c0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085a4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164a5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09c.249-.06.456-.144.623-.25c.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089a2.12 2.12 0 0 0-.537-.5a5.597 5.597 0 0 0-.807-.444a27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405c-.45-.553-.676-1.222-.676-2.005c0-.614.123-1.141.369-1.582c.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629a7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
          />
        </svg>
        <svg
          onMouseEnter={() => setHoveredIcon(5)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 512 512"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 5 ? "#61DAFB" : "currentColor"}`}
            d="M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16a481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32a434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75a502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39a501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2a477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94a481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52Z"
          />
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 5 ? "#1ac9f9" : "currentColor"}`}
            d="M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43Z"
          />
        </svg>
        <svg
          onMouseEnter={() => setHoveredIcon(6)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 512 512"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 6 ? "#F34F29" : "currentColor"}`}
            d="M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61c-25.1 23-37 33.85-37 49.21c0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82c70.75 0 111.79-26.42 111.79-73.18c0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89c0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43c0-8.14 5.27-15 10.57-21.54c77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16c49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26c-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"
          />
        </svg>
        <svg
          onMouseEnter={() => setHoveredIcon(7)}
          onMouseLeave={() => setHoveredIcon(null)}
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.isDesktop ? 80 : 35}`}
          height={`${props.isDesktop ? 80 : 35}`}
          viewBox="0 0 24 24"
        >
          <path
            className="transition-colors duration-200 ease-in-out"
            fill={`${hoveredIcon === 7 ? "#99425B" : "currentColor"}`}
            d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988a3.12 3.12 0 0 0 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244a8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08a3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182c-.048.097-.097.195-.146.299c-.465.959-.993 2.043-1.195 3.259c-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807c1.279-.632 2.599-1.292 3.898-1.612c.48-.118.98-.187 1.508-.264c1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87c.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125c0 0 .008 0 .008-.007c.028-.014.055-.035.083-.05c.007 0 .014-.006.021-.006c.028-.014.063-.028.097-.042c.035-.014.07-.027.098-.041c.007 0 .013-.007.02-.007c.028-.007.056-.021.084-.028c.007 0 .02-.007.028-.007c.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007c.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385l-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904l1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007c.014 0 .02 0 .035.007c.027.007.048.007.076.014c.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029c.007 0 .014.007.028.007c.021.007.049.014.07.027c.007 0 .014.007.02.007c.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048c.007 0 .007.007.013.007c.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209a1.752 1.752 0 0 1-3.502 0a1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751s-1.752-.785-1.752-1.75s.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717c-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12c.167-1.015.632-1.966 1.077-2.877c.028-.055.049-.104.077-.16c.152.056.312.098.479.126c-.264 1.473.486 2.994 1.946 3.745l.264.139l.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43c.18.52.236 1.063.139 1.605z"
          />
        </svg>
      </div>
    </div>
  );
};
