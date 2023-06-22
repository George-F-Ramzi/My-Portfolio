interface Prop {
  color: string;
  width: string;
  height: string;
  classNames: string;
}

export default function Arrow({ color, width, height, classNames }: Prop) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${classNames}`}
    >
      <path
        d="M21.1721 6.54401C20.4222 7.29412 20.0009 8.31135 20.0009 9.37201C20.0009 10.4327 20.4222 11.4499 21.1721 12.2L40.9721 32L21.1721 51.8C20.4434 52.5544 20.0402 53.5648 20.0494 54.6136C20.0585 55.6624 20.4791 56.6657 21.2208 57.4073C21.9624 58.1489 22.9657 58.5696 24.0144 58.5787C25.0632 58.5878 26.0736 58.1846 26.8281 57.456L49.4561 34.828C50.2059 34.0779 50.6272 33.0607 50.6272 32C50.6272 30.9394 50.2059 29.9221 49.4561 29.172L26.8281 6.54401C26.0779 5.79413 25.0607 5.37286 24.0001 5.37286C22.9394 5.37286 21.9222 5.79413 21.1721 6.54401Z"
        fill={color}
      />
    </svg>
  );
}
