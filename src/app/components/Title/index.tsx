interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div>
      <span className="text-offwhite text-sm font-medium leading-tight inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.78496 1.03313C6.52489 1.03148 6.26483 1.03861 6.00524 1.05451C3.95352 1.18107 2.11912 1.85152 1.13671 3.16369C0.784866 3.63371 0.870366 4.28448 1.27499 4.63651C1.67976 4.98854 2.3533 5.01399 2.97346 4.61213C4.04408 3.91815 5.22032 4.16344 5.98612 4.90144C6.75205 5.63949 7.09874 6.84455 6.33955 8.23637C5.44096 9.88369 4.80599 12.7435 5.39521 15.5735C5.98443 18.4036 7.87808 21.1873 11.945 22.4066C13.5141 22.877 15.6399 23.1917 17.6471 22.7659C19.7333 22.354 22.14 21.1366 22.6576 19.8076C22.224 20.2241 21.7464 20.5173 21.2419 20.7353C22.1 19.7547 22.7295 18.4041 22.9664 16.6021L23.085 15.7003L22.3199 16.1923C21.8276 16.5089 21.355 16.8205 20.9093 17.0546C21.033 16.7793 21.1455 16.4349 21.2717 15.9869C20.7515 16.6989 20.1593 17.1754 19.4624 17.4622C19.0296 17.4386 18.6021 17.234 18.0932 16.7076C17.5608 16.157 17.2438 15.2032 17.0402 14.0045C16.8366 12.8058 16.7374 11.3829 16.5402 9.93216C16.1455 7.03051 15.3255 3.93812 12.3336 2.38365C10.6013 1.48365 8.62616 1.0441 6.78491 1.03304L6.78496 1.03313ZM6.77919 1.87735C8.48835 1.8893 10.3469 2.30227 11.9447 3.13238C14.5881 4.50582 15.3194 7.21707 15.7042 10.0459C15.8966 11.4603 15.9942 12.8844 16.2085 14.1458C16.2702 14.5092 16.3414 14.8603 16.4285 15.1951C15.7043 15.197 15.1509 14.8057 14.4736 14.0365C14.8198 15.462 15.0356 15.749 15.6785 16.6404C14.3557 16.2544 12.836 15.012 11.884 13.6374C11.7305 15.5146 12.8319 16.9925 13.4437 17.5717C12.2636 16.9062 10.5978 15.6247 9.47704 13.416C9.42941 15.3578 10.0363 17.5284 11.1856 18.8753C9.56774 18.3345 8.14016 14.2125 7.18157 12.8925C6.57032 14.4495 7.04338 17.0683 7.93494 18.9919C7.01488 17.9214 6.48712 16.6775 6.22143 15.4015C5.68124 12.8073 6.30346 10.0649 7.08041 8.64034C7.99682 6.96024 7.59205 5.27705 6.57182 4.2938C5.55144 3.31055 3.90679 3.00174 2.5146 3.90404C2.11335 4.16419 1.91985 4.07898 1.82901 3.9999C1.73807 3.92082 1.69963 3.8199 1.81232 3.66929C2.56729 2.66082 4.1624 2.01348 6.05732 1.89662C6.29413 1.88199 6.53521 1.87552 6.77933 1.87721L6.77919 1.87735Z"
            fill="#7DD2FF"
          />
        </svg>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.78496 1.03313C6.52489 1.03148 6.26483 1.03861 6.00524 1.05451C3.95352 1.18107 2.11912 1.85152 1.13671 3.16369C0.784866 3.63371 0.870366 4.28448 1.27499 4.63651C1.67976 4.98854 2.3533 5.01399 2.97346 4.61213C4.04408 3.91815 5.22032 4.16344 5.98612 4.90144C6.75205 5.63949 7.09874 6.84455 6.33955 8.23637C5.44096 9.88369 4.80599 12.7435 5.39521 15.5735C5.98443 18.4036 7.87808 21.1873 11.945 22.4066C13.5141 22.877 15.6399 23.1917 17.6471 22.7659C19.7333 22.354 22.14 21.1366 22.6576 19.8076C22.224 20.2241 21.7464 20.5173 21.2419 20.7353C22.1 19.7547 22.7295 18.4041 22.9664 16.6021L23.085 15.7003L22.3199 16.1923C21.8276 16.5089 21.355 16.8205 20.9093 17.0546C21.033 16.7793 21.1455 16.4349 21.2717 15.9869C20.7515 16.6989 20.1593 17.1754 19.4624 17.4622C19.0296 17.4386 18.6021 17.234 18.0932 16.7076C17.5608 16.157 17.2438 15.2032 17.0402 14.0045C16.8366 12.8058 16.7374 11.3829 16.5402 9.93216C16.1455 7.03051 15.3255 3.93812 12.3336 2.38365C10.6013 1.48365 8.62616 1.0441 6.78491 1.03304L6.78496 1.03313ZM6.77919 1.87735C8.48835 1.8893 10.3469 2.30227 11.9447 3.13238C14.5881 4.50582 15.3194 7.21707 15.7042 10.0459C15.8966 11.4603 15.9942 12.8844 16.2085 14.1458C16.2702 14.5092 16.3414 14.8603 16.4285 15.1951C15.7043 15.197 15.1509 14.8057 14.4736 14.0365C14.8198 15.462 15.0356 15.749 15.6785 16.6404C14.3557 16.2544 12.836 15.012 11.884 13.6374C11.7305 15.5146 12.8319 16.9925 13.4437 17.5717C12.2636 16.9062 10.5978 15.6247 9.47704 13.416C9.42941 15.3578 10.0363 17.5284 11.1856 18.8753C9.56774 18.3345 8.14016 14.2125 7.18157 12.8925C6.57032 14.4495 7.04338 17.0683 7.93494 18.9919C7.01488 17.9214 6.48712 16.6775 6.22143 15.4015C5.68124 12.8073 6.30346 10.0649 7.08041 8.64034C7.99682 6.96024 7.59205 5.27705 6.57182 4.2938C5.55144 3.31055 3.90679 3.00174 2.5146 3.90404C2.11335 4.16419 1.91985 4.07898 1.82901 3.9999C1.73807 3.92082 1.69963 3.8199 1.81232 3.66929C2.56729 2.66082 4.1624 2.01348 6.05732 1.89662C6.29413 1.88199 6.53521 1.87552 6.77933 1.87721L6.77919 1.87735Z"
            fill="#7DD2FF"
          />
        </svg>
      </span>
    </div>
  );
}