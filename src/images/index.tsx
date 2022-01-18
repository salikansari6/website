/* eslint-disable react/no-unknown-property */
import React from 'react'

interface Size {
  height?: string
  width?: string
}

export const Sun = ({ height, width }: Size) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

export const Moon = ({ height, width }: Size) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.3 22H12.2C10.8285 21.9896 9.4729 21.7056 8.21254 21.1647C6.95219 20.6238 5.81242 19.8369 4.85998 18.85C3.09382 16.9613 2.08986 14.4854 2.04184 11.9C1.99383 9.31458 2.90517 6.80304 4.59998 4.85005C5.69186 3.62639 7.06451 2.68613 8.59998 2.11005C8.77914 2.04111 8.97436 2.02519 9.16232 2.0642C9.35029 2.10321 9.52305 2.1955 9.65998 2.33005C9.78679 2.45937 9.87611 2.62071 9.91838 2.79683C9.96065 2.97296 9.95429 3.15725 9.89998 3.33005C9.35193 4.83098 9.24335 6.4571 9.58698 8.01757C9.9306 9.57804 10.7122 11.0081 11.84 12.14C12.9783 13.2644 14.4118 14.0433 15.9745 14.3867C17.5372 14.73 19.1652 14.6237 20.67 14.08C20.8491 14.017 21.0424 14.0062 21.2274 14.0491C21.4124 14.0919 21.5814 14.1864 21.7146 14.3218C21.8478 14.4571 21.9398 14.6275 21.9797 14.8131C22.0196 14.9988 22.0058 15.1919 21.94 15.37C21.4291 16.7338 20.6311 17.9717 19.6 19C18.6408 19.9563 17.5021 20.7137 16.2494 21.2285C14.9966 21.7434 13.6544 22.0056 12.3 22Z"
      fill="#334155"
    />
  </svg>
)

export const Logo = ({ height, width }: Size) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 244 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3222 44.293C13.6526 44.2318 12.9774 44.3008 12.334 44.496C12.1991 44.549 12.0761 44.6283 11.972 44.7292C11.868 44.8302 11.785 44.9507 11.7279 45.084C11.6707 45.2172 11.6406 45.3605 11.6391 45.5055C11.6377 45.6505 11.665 45.7944 11.7195 45.9287C12.5948 47.9879 15.3945 46.4333 16.4669 45.1572C22.9533 36.039 8.68793 21.8512 15.3656 11.2306C16.4225 9.70529 17.8006 8.43029 19.4029 7.49531C21.0053 6.56032 22.7929 5.98807 24.64 5.81882C44.5222 4.80954 50.6724 44.844 14.3454 44.293H14.3222ZM14.0439 37.0599C20.623 36.7118 25.0574 34.0146 27.6543 29.2757C29.8975 25.314 29.712 17.8315 26.0892 16.0392C25.3415 15.6746 24.4881 15.5902 23.6836 15.8013C21.9447 16.3524 21.4983 17.9997 21.4867 20.0646C21.5621 30.1458 28.2571 44.5714 16.8901 51.2245C15.2982 52.143 13.4185 52.4262 11.6269 52.0175C9.83534 51.6089 8.26401 50.5384 7.2272 49.0203C3.43625 43.2721 7.70831 37.2803 14.0439 37.0599Z"
      fill="#7443FE"
    />
    <path
      d="M22.8821 43.5594C22.8415 43.5594 21.9541 43.7335 20.0865 44.0061C19.0799 44.1708 18.0614 44.2523 17.0415 44.2496C16.8643 44.5594 16.6707 44.8596 16.4615 45.1487C15.9073 45.7781 15.2224 46.2789 14.4547 46.6161L17.1517 51.0473C19.9783 49.409 22.0393 46.716 22.8821 43.5594Z"
      fill="url(#paint0_linear_1762_1022)"
    />
    <path
      d="M16.3759 30.4166L22.5123 28.8796C22.7965 30.6486 23.0923 32.4466 23.2721 34.2272C22.4654 34.8136 21.5861 35.2932 20.6563 35.654C19.7801 36.0089 18.8786 36.2978 17.9593 36.5182C17.5759 34.4496 17.0468 32.4107 16.3759 30.4166Z"
      fill="url(#paint1_linear_1762_1022)"
    />
    <path
      d="M71.3606 28.5049C70.4804 26.9814 69.2217 25.711 67.7063 24.8166C66.1152 23.8807 64.2969 23.4012 62.4511 23.4307C60.6123 23.3972 58.798 23.8557 57.1959 24.7586C55.6795 25.6159 54.4184 26.8607 53.5416 28.3657C52.6311 29.9523 52.1681 31.756 52.2017 33.5849V52.1999H57.6309V42.0109C58.04 42.3397 58.4767 42.6327 58.936 42.8866C60.1082 43.5251 61.4237 43.8544 62.7585 43.8435C64.5715 43.8797 66.3608 43.427 67.9383 42.5329C69.4132 41.6695 70.6183 40.4124 71.4186 38.9026C72.2807 37.2627 72.7137 35.4313 72.6773 33.5791C72.6996 31.8004 72.2449 30.0483 71.3606 28.5049ZM66.6564 36.1133C66.26 36.8576 65.6737 37.4839 64.9569 37.9284C64.2038 38.3903 63.3345 38.6277 62.4511 38.6127C61.5806 38.6268 60.7245 38.3892 59.9859 37.9284C59.26 37.4823 58.6608 36.8573 58.2458 36.1133C57.8285 35.3473 57.6098 34.489 57.6098 33.6168C57.6098 32.7445 57.8285 31.8862 58.2458 31.1202C58.6581 30.3788 59.2582 29.7588 59.9859 29.3225C60.7297 28.8761 61.5837 28.6471 62.4511 28.6614C63.3315 28.6457 64.1989 28.8745 64.9569 29.3225C65.6757 29.757 66.2631 30.3783 66.6564 31.1202C67.0566 31.8916 67.2655 32.7478 67.2655 33.6168C67.2655 34.4857 67.0566 35.3419 66.6564 36.1133Z"
      fill="#1B1464"
    />
    <path
      d="M81.7378 43.2925H76.3144V32.2105C76.2858 30.6726 76.5988 29.1475 77.2309 27.7452C77.827 26.4476 78.7989 25.3587 80.0209 24.6195C81.4302 23.8102 83.0368 23.4086 84.6612 23.4596C85.2898 23.4589 85.9171 23.5172 86.5348 23.6336C87.0982 23.7354 87.6486 23.8987 88.1763 24.1207V29.5081C87.7155 29.2221 87.2124 29.0107 86.6856 28.8818C86.1863 28.7586 85.6743 28.6944 85.1601 28.6904C84.693 28.665 84.2259 28.7405 83.7905 28.9116C83.3551 29.0827 82.9617 29.3455 82.6369 29.6821C81.9905 30.4338 81.6601 31.4063 81.7146 32.396L81.7378 43.2925Z"
      fill="#1B1464"
    />
    <path
      d="M100.134 43.8029C98.2995 43.8296 96.4931 43.35 94.9136 42.4169C93.3923 41.5167 92.1279 40.2407 91.2419 38.7113C90.3524 37.1501 89.8847 35.3844 89.8847 33.5878C89.8847 31.7911 90.3524 30.0254 91.2419 28.4643C92.1351 26.9391 93.4054 25.669 94.931 24.776C96.522 23.8711 98.3209 23.3953 100.151 23.3953C101.982 23.3953 103.781 23.8711 105.372 24.776C106.892 25.6779 108.156 26.9535 109.043 28.4817C109.933 30.0396 110.401 31.8025 110.401 33.5965C110.401 35.3904 109.933 37.1533 109.043 38.7113C108.154 40.244 106.883 41.5205 105.354 42.4169C103.773 43.3456 101.968 43.8248 100.134 43.8029ZM100.134 38.6127C101.017 38.6277 101.887 38.3903 102.64 37.9284C103.367 37.4845 103.967 36.859 104.38 36.1133C104.797 35.3473 105.016 34.489 105.016 33.6168C105.016 32.7445 104.797 31.8862 104.38 31.1202C103.967 30.3745 103.367 29.749 102.64 29.3051C101.886 28.8452 101.017 28.6098 100.134 28.6266C99.2635 28.6125 98.4074 28.8502 97.6688 29.3109C96.9416 29.7554 96.342 30.3808 95.9287 31.126C95.5113 31.892 95.2927 32.7503 95.2927 33.6226C95.2927 34.4948 95.5113 35.3531 95.9287 36.1191C96.342 36.8643 96.9416 37.4897 97.6688 37.9342C98.408 38.3929 99.264 38.6285 100.134 38.6127Z"
      fill="#1B1464"
    />
    <path
      d="M123.222 43.8029C121.849 43.8139 120.489 43.5415 119.226 43.0026C118.028 42.4812 116.941 41.7351 116.024 40.8048C114.608 39.3612 113.648 37.5329 113.265 35.5478C112.881 33.5627 113.09 31.5086 113.866 29.6415C114.374 28.429 115.106 27.3233 116.024 26.3824C116.947 25.4442 118.044 24.6955 119.255 24.1788C120.517 23.6421 121.88 23.383 123.251 23.4191C125.031 23.4303 126.78 23.8932 128.332 24.7645C129.955 25.7111 131.23 27.1547 131.969 28.8818L127.491 31.3812C127.1 30.568 126.499 29.8735 125.751 29.3689C125.006 28.8845 124.134 28.634 123.245 28.6499C122.395 28.6388 121.558 28.8679 120.832 29.311C120.125 29.7498 119.541 30.3602 119.133 31.0855C118.706 31.855 118.489 32.7226 118.501 33.6023C118.498 34.452 118.709 35.2888 119.115 36.0356C119.52 36.7824 120.107 37.4154 120.821 37.8762C121.541 38.3343 122.38 38.5722 123.234 38.5605C124.126 38.5768 125.001 38.3176 125.74 37.8182C126.479 37.3139 127.078 36.6293 127.48 35.8291L131.958 38.3286C131.219 40.0557 129.944 41.4993 128.321 42.4459C126.763 43.3214 125.009 43.7883 123.222 43.8029Z"
      fill="#1B1464"
    />
    <path
      d="M153.545 33.0687C153.562 31.3761 153.175 29.7038 152.414 28.1917C151.681 26.7298 150.564 25.4949 149.183 24.6194C147.642 23.6832 145.863 23.2157 144.061 23.274C142.256 23.2381 140.479 23.719 138.939 24.66C137.469 25.5629 136.268 26.8423 135.459 28.3656C134.626 29.9942 134.201 31.8 134.218 33.6288C134.235 35.4577 134.695 37.2552 135.558 38.8678C136.427 40.3947 137.704 41.6496 139.247 42.4922C140.868 43.3812 142.693 43.8328 144.542 43.8028C146.406 43.8436 148.242 43.3484 149.832 42.3762C151.366 41.3938 152.576 39.9821 153.313 38.3169L149.142 36.1712C148.73 37.0311 148.072 37.7495 147.251 38.2357C146.414 38.735 145.454 38.992 144.479 38.978C143.505 39.0049 142.544 38.7556 141.706 38.2589C140.927 37.7735 140.303 37.0752 139.908 36.2466C139.673 35.7529 139.513 35.2272 139.432 34.6867H153.504L153.545 33.0687ZM139.705 31.6247C139.85 30.9885 140.116 30.3861 140.488 29.8502C140.859 29.3135 141.357 28.8771 141.938 28.5802C142.585 28.2608 143.299 28.1016 144.02 28.1163C144.723 28.1008 145.419 28.2539 146.051 28.5628C146.624 28.8529 147.117 29.2815 147.483 29.8096C147.852 30.3502 148.082 30.9738 148.15 31.6247H139.705Z"
      fill="#1B1464"
    />
    <path
      d="M171.662 15.08L171.633 25.24C171.224 24.9092 170.785 24.6161 170.322 24.3643C169.144 23.7318 167.826 23.403 166.488 23.4074C164.684 23.3737 162.903 23.8178 161.326 24.6948C159.836 25.5419 158.617 26.7948 157.811 28.3077C156.946 29.9468 156.511 31.7784 156.546 33.6312C156.528 35.4201 156.998 37.1802 157.904 38.7228C158.791 40.2526 160.055 41.5302 161.575 42.4343C163.155 43.3674 164.961 43.8469 166.796 43.8202C168.64 43.8482 170.458 43.3901 172.068 42.4923C173.596 41.6336 174.864 40.3797 175.74 38.862C176.646 37.2737 177.109 35.4711 177.08 33.6428V15.0857L171.662 15.08ZM171.03 36.1133C170.619 36.8598 170.019 37.4856 169.29 37.9284C168.54 38.3923 167.672 38.6299 166.79 38.6127C165.923 38.6165 165.073 38.3709 164.342 37.9052C163.615 37.4607 163.015 36.8353 162.602 36.0901C162.183 35.3386 161.965 34.4916 161.97 33.6312C161.965 32.7525 162.183 31.8868 162.602 31.1144C163.009 30.3643 163.61 29.7373 164.342 29.2993C165.086 28.8529 165.94 28.6239 166.807 28.6382C167.672 28.6164 168.526 28.8368 169.272 29.2743C170.018 29.7119 170.627 30.3492 171.03 31.1144C171.453 31.8854 171.671 32.752 171.662 33.6312C171.674 34.4998 171.456 35.3561 171.03 36.1133Z"
      fill="#1B1464"
    />
    <path
      d="M195.171 23.9873V32.9237C195.181 33.8616 195.026 34.794 194.713 35.6783C194.443 36.4691 193.961 37.171 193.321 37.708C192.651 38.2353 191.818 38.5103 190.966 38.485C190.127 38.5145 189.304 38.2453 188.645 37.7254C188.001 37.1904 187.518 36.488 187.248 35.6957C186.937 34.8248 186.782 33.9062 186.789 32.9817V23.9873H181.36V33.5906C181.34 35.3664 181.713 37.1247 182.451 38.7402C183.144 40.2632 184.267 41.5509 185.681 42.4458C187.27 43.4008 189.101 43.8761 190.954 43.8144C192.822 43.8792 194.669 43.404 196.273 42.4458C197.681 41.5527 198.801 40.2719 199.498 38.7576C200.243 37.1383 200.616 35.3727 200.589 33.5906V23.9873H195.171Z"
      fill="#1B1464"
    />
    <path
      d="M215.169 23.6453C214.553 23.5288 213.928 23.4706 213.301 23.4713C211.667 23.417 210.05 23.8186 208.632 24.6311C207.411 25.372 206.44 26.4604 205.842 27.7568C205.212 29.1601 204.899 30.6845 204.925 32.2221V43.3042H210.354V32.4077C210.301 31.419 210.629 30.4475 211.271 29.6937C211.596 29.358 211.99 29.0959 212.425 28.9248C212.86 28.7538 213.327 28.6778 213.794 28.7021C214.31 28.7056 214.824 28.7699 215.325 28.8934C215.852 29.0235 216.355 29.2348 216.816 29.5198V24.1324C216.286 23.9104 215.734 23.747 215.169 23.6453Z"
      fill="#1B1464"
    />
    <path
      d="M237.799 33.0687C237.819 31.3766 237.433 29.7043 236.674 28.1917C235.941 26.7298 234.824 25.4949 233.443 24.6194C231.903 23.6832 230.123 23.2157 228.321 23.274C226.517 23.2381 224.74 23.719 223.2 24.66C221.73 25.5629 220.528 26.8423 219.719 28.3656C218.887 29.9942 218.461 31.8 218.478 33.6288C218.495 35.4577 218.955 37.2552 219.818 38.8678C220.686 40.396 221.964 41.6514 223.507 42.4922C225.129 43.3812 226.954 43.8328 228.803 43.8028C230.666 43.8436 232.502 43.3484 234.093 42.3762C235.626 41.3938 236.836 39.9821 237.573 38.3169L233.403 36.1712C232.99 37.0311 232.332 37.7495 231.512 38.2357C230.674 38.735 229.714 38.992 228.739 38.978C227.765 39.0049 226.804 38.7556 225.966 38.2589C225.187 37.7735 224.563 37.0752 224.168 36.2466C223.934 35.7529 223.773 35.2272 223.693 34.6867H237.759L237.799 33.0687ZM223.959 31.6247C224.109 30.9891 224.377 30.3872 224.748 29.8502C225.119 29.3135 225.617 28.8771 226.198 28.5802C226.845 28.2608 227.559 28.1016 228.281 28.1163C228.983 28.1008 229.68 28.2539 230.311 28.5628C230.882 28.8464 231.374 29.2667 231.744 29.7864C232.113 30.327 232.342 30.9506 232.411 31.6015L223.959 31.6247Z"
      fill="#1B1464"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1762_1022"
        x1="22.5631"
        y1="43.1766"
        x2="15.516"
        y2="49.0868"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1F006A" />
        <stop offset="1" stop-color="#6B37FE" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1762_1022"
        x1="21.3233"
        y1="35.3872"
        x2="20.0054"
        y2="29.5814"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1F006A" />
        <stop offset="1" stop-color="#6B37FE" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

export const MenuIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.05 23H15.95C15.4253 23 15 23.4253 15 23.95V24.05C15 24.5747 15.4253 25 15.95 25H32.05C32.5747 25 33 24.5747 33 24.05V23.95C33 23.4253 32.5747 23 32.05 23Z"
      fill="#334155"
    />
    <path
      d="M32.05 28H15.95C15.4253 28 15 28.4253 15 28.95V29.05C15 29.5747 15.4253 30 15.95 30H32.05C32.5747 30 33 29.5747 33 29.05V28.95C33 28.4253 32.5747 28 32.05 28Z"
      fill="#334155"
    />
    <path
      d="M32.05 18H15.95C15.4253 18 15 18.4253 15 18.95V19.05C15 19.5747 15.4253 20 15.95 20H32.05C32.5747 20 33 19.5747 33 19.05V18.95C33 18.4253 32.5747 18 32.05 18Z"
      fill="#334155"
    />
  </svg>
)

export const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="48"
    height="48"
    viewBox="-12 -12 48 48"
    stroke="#334155"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
)
