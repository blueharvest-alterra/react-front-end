import React from "react";

export default function Header() {
  return (
    <div className="z-30 flex bg-primary-90 p-6 text-netral-10 items-center justify-between h-[96px] w-full max-w-screen mx-auto fixed top-0 left-0 right-0 pl-[350px]">
      <div>
        <h1 className="text-2xl font-semibold">Selamat Datang, Justin!</h1>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <input
            type="text"
            style={{ width: "305px" }}
            className="py-3 px-4 rounded-lg placeholder-primary-90 placeholder-b"
            placeholder="Pencarian Produk"
          />
        </div>
        <div
          className="flex justify-center items-center  h-12 w-12 bg-netral-10 rounded-full"
          style={{ borderRadius: "" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.9375 10.0001C10.9375 10.1855 10.8825 10.3668 10.7795 10.5209C10.6765 10.6751 10.5301 10.7953 10.3588 10.8662C10.1875 10.9372 9.99896 10.9557 9.8171 10.9196C9.63525 10.8834 9.4682 10.7941 9.33709 10.663C9.20598 10.5319 9.11669 10.3648 9.08051 10.183C9.04434 10.0011 9.06291 9.81263 9.13386 9.64132C9.20482 9.47001 9.32498 9.3236 9.47915 9.22058C9.63333 9.11757 9.81458 9.06259 10 9.06259C10.2486 9.06259 10.4871 9.16136 10.6629 9.33717C10.8387 9.51299 10.9375 9.75145 10.9375 10.0001ZM6.5625 9.06259C6.37708 9.06259 6.19582 9.11757 6.04165 9.22058C5.88748 9.3236 5.76732 9.47001 5.69636 9.64132C5.62541 9.81263 5.60684 10.0011 5.64301 10.183C5.67919 10.3648 5.76848 10.5319 5.89959 10.663C6.0307 10.7941 6.19775 10.8834 6.3796 10.9196C6.56146 10.9557 6.74996 10.9372 6.92127 10.8662C7.09257 10.7953 7.23899 10.6751 7.342 10.5209C7.44502 10.3668 7.5 10.1855 7.5 10.0001C7.5 9.75145 7.40123 9.51299 7.22541 9.33717C7.0496 9.16136 6.81114 9.06259 6.5625 9.06259ZM13.4375 9.06259C13.2521 9.06259 13.0708 9.11757 12.9167 9.22058C12.7625 9.3236 12.6423 9.47001 12.5714 9.64132C12.5004 9.81263 12.4818 10.0011 12.518 10.183C12.5542 10.3648 12.6435 10.5319 12.7746 10.663C12.9057 10.7941 13.0727 10.8834 13.2546 10.9196C13.4365 10.9557 13.625 10.9372 13.7963 10.8662C13.9676 10.7953 14.114 10.6751 14.217 10.5209C14.32 10.3668 14.375 10.1855 14.375 10.0001C14.375 9.75145 14.2762 9.51299 14.1004 9.33717C13.9246 9.16136 13.6861 9.06259 13.4375 9.06259ZM18.125 10.0001C18.1253 11.4028 17.7624 12.7818 17.0717 14.0027C16.381 15.2236 15.3859 16.2449 14.1834 16.9671C12.9808 17.6894 11.6118 18.088 10.2095 18.1242C8.80719 18.1603 7.41942 17.8328 6.18125 17.1735L3.52109 18.0602C3.30085 18.1337 3.0645 18.1444 2.83854 18.091C2.61257 18.0377 2.40593 17.9225 2.24176 17.7583C2.07759 17.5942 1.96239 17.3875 1.90906 17.1615C1.85573 16.9356 1.86639 16.6992 1.93984 16.479L2.82656 13.8188C2.24699 12.7292 1.92328 11.5218 1.88 10.2883C1.83672 9.0549 2.075 7.8278 2.57677 6.70019C3.07854 5.57258 3.8306 4.57411 4.77587 3.78055C5.72114 2.98699 6.83478 2.41921 8.03224 2.1203C9.22971 1.82139 10.4795 1.79922 11.6868 2.05545C12.8942 2.31169 14.0272 2.8396 15.0001 3.59912C15.9729 4.35865 16.7599 5.32981 17.3014 6.43891C17.8428 7.54801 18.1245 8.76588 18.125 10.0001ZM16.875 10.0001C16.8747 8.9455 16.6318 7.90511 16.1651 6.95942C15.6983 6.01373 15.0203 5.18808 14.1834 4.54636C13.3466 3.90464 12.3733 3.46405 11.3389 3.25867C10.3045 3.05329 9.23671 3.08863 8.21815 3.36196C7.1996 3.63529 6.25757 4.13927 5.46496 4.83492C4.67235 5.53058 4.0504 6.39925 3.64724 7.37373C3.24407 8.34821 3.07048 9.40238 3.13992 10.4547C3.20935 11.507 3.51994 12.5292 4.04766 13.4423C4.09195 13.5189 4.11945 13.6041 4.12834 13.6922C4.13723 13.7803 4.1273 13.8693 4.09922 13.9532L3.125 16.8751L6.04688 15.9009C6.11052 15.8792 6.17729 15.8681 6.24453 15.8681C6.3543 15.8682 6.46208 15.8974 6.55703 15.9524C7.60219 16.5571 8.78817 16.8759 9.99566 16.8767C11.2031 16.8774 12.3895 16.5602 13.4354 15.9568C14.4814 15.3534 15.3499 14.4852 15.9537 13.4395C16.5575 12.3938 16.8753 11.2076 16.875 10.0001Z"
              fill="#0075EB"
            />
          </svg>
        </div>
        <div
          className="flex justify-center items-center  h-12 w-12 bg-netral-10 rounded-full"
          style={{ borderRadius: "" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.3282 13.7453C16.8946 12.9984 16.2501 10.8852 16.2501 8.125C16.2501 6.4674 15.5916 4.87769 14.4195 3.70558C13.2474 2.53348 11.6577 1.875 10.0001 1.875C8.34247 1.875 6.75276 2.53348 5.58065 3.70558C4.40855 4.87769 3.75007 6.4674 3.75007 8.125C3.75007 10.8859 3.10476 12.9984 2.67116 13.7453C2.56044 13.9352 2.50174 14.1509 2.50098 14.3707C2.50023 14.5905 2.55745 14.8066 2.66687 14.9973C2.77629 15.1879 2.93404 15.3463 3.12422 15.4565C3.31439 15.5667 3.53027 15.6248 3.75007 15.625H6.93835C7.08255 16.3306 7.46603 16.9647 8.02393 17.4201C8.58182 17.8756 9.2799 18.1243 10.0001 18.1243C10.7202 18.1243 11.4183 17.8756 11.9762 17.4201C12.5341 16.9647 12.9176 16.3306 13.0618 15.625H16.2501C16.4698 15.6247 16.6856 15.5665 16.8757 15.4562C17.0657 15.346 17.2234 15.1875 17.3327 14.9969C17.442 14.8063 17.4992 14.5903 17.4984 14.3705C17.4976 14.1508 17.4389 13.9351 17.3282 13.7453ZM10.0001 16.875C9.61243 16.8749 9.23436 16.7546 8.91788 16.5308C8.60141 16.3069 8.3621 15.9905 8.23288 15.625H11.7673C11.638 15.9905 11.3987 16.3069 11.0823 16.5308C10.7658 16.7546 10.3877 16.8749 10.0001 16.875ZM3.75007 14.375C4.35163 13.3406 5.00007 10.9438 5.00007 8.125C5.00007 6.79892 5.52686 5.52715 6.46454 4.58947C7.40222 3.65178 8.67399 3.125 10.0001 3.125C11.3262 3.125 12.5979 3.65178 13.5356 4.58947C14.4733 5.52715 15.0001 6.79892 15.0001 8.125C15.0001 10.9414 15.6469 13.3383 16.2501 14.375H3.75007Z"
              fill="#0075EB"
            />
          </svg>
        </div>
        <div
          className="flex justify-center items-center  h-12 w-12 bg-netral-10 rounded-full"
          style={{ borderRadius: "" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.0407 16.5622C16.8508 14.5052 15.0172 13.0302 12.8774 12.3309C13.9358 11.7008 14.7582 10.7407 15.2182 9.59796C15.6781 8.45524 15.7503 7.19312 15.4235 6.00543C15.0968 4.81774 14.3892 3.77015 13.4094 3.02353C12.4296 2.27692 11.2318 1.87256 10 1.87256C8.76821 1.87256 7.57044 2.27692 6.59067 3.02353C5.6109 3.77015 4.90331 4.81774 4.57654 6.00543C4.24978 7.19312 4.32193 8.45524 4.78189 9.59796C5.24186 10.7407 6.06422 11.7008 7.12268 12.3309C4.98284 13.0294 3.14925 14.5044 1.9594 16.5622C1.91577 16.6333 1.88683 16.7125 1.87429 16.795C1.86174 16.8775 1.86585 16.9617 1.88638 17.0426C1.9069 17.1235 1.94341 17.1995 1.99377 17.266C2.04413 17.3326 2.10731 17.3884 2.17958 17.4301C2.25185 17.4719 2.33175 17.4987 2.41457 17.5091C2.49738 17.5195 2.58143 17.5131 2.66176 17.4905C2.74209 17.4678 2.81708 17.4293 2.88228 17.3772C2.94749 17.3252 3.00161 17.2605 3.04143 17.1872C4.51331 14.6434 7.11487 13.1247 10 13.1247C12.8852 13.1247 15.4867 14.6434 16.9586 17.1872C16.9985 17.2605 17.0526 17.3252 17.1178 17.3772C17.183 17.4293 17.258 17.4678 17.3383 17.4905C17.4186 17.5131 17.5027 17.5195 17.5855 17.5091C17.6683 17.4987 17.7482 17.4719 17.8205 17.4301C17.8927 17.3884 17.9559 17.3326 18.0063 17.266C18.0566 17.1995 18.0932 17.1235 18.1137 17.0426C18.1342 16.9617 18.1383 16.8775 18.1258 16.795C18.1132 16.7125 18.0843 16.6333 18.0407 16.5622ZM5.62503 7.49968C5.62503 6.63439 5.88162 5.78853 6.36235 5.06906C6.84308 4.3496 7.52636 3.78884 8.32579 3.45771C9.12522 3.12658 10.0049 3.03994 10.8535 3.20875C11.7022 3.37756 12.4818 3.79424 13.0936 4.40609C13.7055 5.01795 14.1222 5.7975 14.291 6.64616C14.4598 7.49483 14.3731 8.3745 14.042 9.17392C13.7109 9.97335 13.1501 10.6566 12.4306 11.1374C11.7112 11.6181 10.8653 11.8747 10 11.8747C8.84009 11.8734 7.72801 11.4121 6.90781 10.5919C6.0876 9.7717 5.62627 8.65963 5.62503 7.49968Z"
              fill="#0075EB"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
