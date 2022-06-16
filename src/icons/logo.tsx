import * as React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  background?: string;
  fillColor?: string;
}

function Logo(props: LogoProps) {
  const iconBackground = props.background || "#176587";
  const fillColor = props.fillColor || "#FFFFFF";
  return (
    <svg version="1.1" id="Layer_1" viewBox="0 0 400 400" {...props}>
      <path
        fill={iconBackground}
        d="M350.72,137.44c0.54-16.81-12.7-30.92-29.49-31.46c-8.15-0.28-15.91,2.66-21.86,8.23
	c-5.51,5.17-8.85,12.05-9.51,19.51c-28.35-23.48-69.83-32.37-92.21-32.37c-16.7,0-43.52,4.53-68.73,17.26
	c-9.65,4.87-18.06,10.45-25.19,16.64c-0.32-8.05-3.72-15.52-9.61-21.04c-5.94-5.58-13.61-8.51-21.84-8.23
	c-16.81,0.54-30.04,14.65-29.51,31.48c0.32,9.54,5,17.92,12.07,23.29c-2.44,3.99-5.2,11.69-5.26,41.74
	c0.07,34.2,3.65,39.39,6.26,43.19c5.24,7.59,15.63,12.8,30.89,15.54c4.47,10.75,10.16,19.96,16.95,26.11
	c9.43,8.54,52.86,40.42,92.92,40.42c0.34,0,0.67-0.01,1.03-0.02c0.35,0.01,0.7,0.02,1.05,0.02c40.04,0,83.47-31.88,92.92-40.43
	c6.87-6.22,12.61-15.55,17.1-26.46c14.21-2.82,23.93-7.92,28.95-15.19c2.61-3.79,6.19-8.98,6.26-43.26
	c-0.06-29.97-2.82-37.67-5.26-41.66C345.72,155.37,350.41,146.98,350.72,137.44z"
      />
      <path
        fill={fillColor}
        d="M319.89,147.11c5.88,0.19,10.8-4.42,11-10.3c0.19-5.88-4.43-10.8-10.31-10.99
	c-5.88-0.19-10.8,4.42-10.99,10.3c-0.07,2.24,0.56,4.34,1.69,6.1c-6.06,9.33-7.52,16.81-7.66,21.44c-3.61-0.69-6.33-1.03-6.33-1.03
	s9.29,12.17,8.59,40.52c0.45,22.26-6.2,39.13-6.2,39.13s18.43-2.54,22.11-7.86c1.8-2.62,3.22-17.25,3.22-31.96v0
	c0-14.71-1.41-29.33-3.22-31.95c-1.64-2.38-6.85-4.2-11.85-5.49c-0.09-3.23,0.52-9.88,6.14-18.8
	C317.28,146.73,318.48,147.06,319.89,147.11z"
      />
      <path
        fill={fillColor}
        d="M87.62,203.15c-0.69-28.35,8.59-40.52,8.59-40.52s-2.72,0.34-6.33,1.03c-0.14-4.64-1.6-12.12-7.66-21.44
	c1.13-1.76,1.76-3.85,1.69-6.1c-0.19-5.88-5.11-10.5-10.99-10.3c-5.88,0.19-10.49,5.11-10.31,10.99c0.19,5.88,5.11,10.49,11,10.3
	c1.4-0.05,2.72-0.37,3.93-0.91c5.63,8.92,6.35,15.58,6.26,18.8c-5,1.29-10.19,3.11-11.84,5.49c-1.8,2.62-2.97,17.24-2.97,31.95v0
	c0,14.71,1.16,29.34,2.97,31.96c3.68,5.33,21.75,7.86,21.75,7.86S87.17,225.41,87.62,203.15z"
      />
      <path
        fill={fillColor}
        d="M299.16,185.18c-7.28-44.97-70.19-63.99-101.52-63.99c-31.34,0-94.24,19.02-101.52,63.99
	c-4.56,28.19,4.77,72.85,20.88,87.44c7,6.34,46.25,35.29,79.6,35.29c0.35,0,0.69-0.02,1.04-0.03c0.35,0,0.69,0.03,1.04,0.03
	c33.35,0,72.59-28.95,79.6-35.29C294.39,258.03,303.73,213.37,299.16,185.18z M269.69,244.29c-15.04,9.04-129.06,9.04-144.1,0
	c-3.67-4.53-7.53-12.22-9.86-20.87c2.73,1.95,5.66,3.21,8.75,3.72c0.51,0.09,1.02,0.13,1.52,0.13c6.24,0,11.2-6.52,16-12.83
	c2.72-3.57,6.82-8.97,8.98-9.34c2.18-0.38,8.52,1.29,17.69,5.65c-0.7,2.54-1.08,5.21-1.08,7.98c0,16.6,13.45,30.05,30.05,30.05
	c16.6,0,30.05-13.45,30.05-30.05c0-3.03-0.45-5.95-1.29-8.71c8.3-3.8,14.05-5.27,16.11-4.91c2.16,0.37,6.26,5.77,8.98,9.34
	c4.81,6.32,9.76,12.83,16,12.83c0.5,0,1-0.04,1.52-0.13c4.46-0.75,8.05-2.72,10.95-5.31C277.7,231.12,273.58,239.48,269.69,244.29z
	 M181.74,219.08c0-9.02,7.31-16.33,16.33-16.33c9.02,0,16.33,7.31,16.33,16.33c0,9.02-7.31,16.33-16.33,16.33
	C189.05,235.42,181.74,228.1,181.74,219.08z M279.99,206.62c-2.97,7.05-7.14,11.08-12.41,11.96c-0.01,0-0.84,0.07-2.93-1.91
	c-1.98-1.88-4.15-4.73-6.25-7.49c-4.57-6.01-8.89-11.68-14.41-12.64c-5.2-0.89-13.61,2.08-21.27,5.62
	c-5.38-8.13-14.6-13.49-25.08-13.49c-10.75,0-20.18,5.65-25.49,14.14c-8.02-3.81-17.14-7.22-22.65-6.27
	c-5.52,0.95-9.84,6.63-14.41,12.64c-2.1,2.76-4.27,5.61-6.25,7.49c-2.09,1.98-2.93,1.91-2.93,1.91c-5.18-0.87-9.29-5.44-12.33-10.78
	c0.02-2.88,0.29-5.77,0.89-8.51c0.97-4.46,8.04-10.29,18.24-13.29h129.87c10.19,3,17.27,8.83,18.24,13.29
	c0.24,1.12,0.43,2.28,0.57,3.43C281.01,203.95,280.55,205.29,279.99,206.62z"
      />
    </svg>
  );
}

export default Logo;
