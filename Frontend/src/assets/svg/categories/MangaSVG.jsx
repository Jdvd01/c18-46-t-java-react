export const MangaSVG = ({
	width = '24',
	height = '24',
	color = '#000000',
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill={color}
		>
			<g clipPath="url(#clip0_524_184)">
				<path
					d="M9.97739 1.27447C9.85737 1.27984 9.74041 1.31397 9.63633 1.37396C9.53225 1.43396 9.4441 1.51808 9.37931 1.61925C9.31451 1.72041 9.27497 1.83565 9.26399 1.95529C9.25302 2.07492 9.27094 2.19544 9.31625 2.3067C9.31625 2.3067 9.74869 3.495 9.86606 4.92291C9.02241 4.0893 7.77048 3.27447 6.01157 3.27447C3.72603 3.27447 2.08774 4.40533 2.08774 4.40533C1.9891 4.47289 1.90803 4.56306 1.85131 4.66831C1.79458 4.77356 1.76384 4.89084 1.76164 5.01038C1.75945 5.12992 1.78586 5.24826 1.83867 5.35552C1.89149 5.46279 1.96918 5.55587 2.06528 5.62701C3.68393 6.82607 5.22025 8.21311 6.16293 9.87896C5.73756 9.81344 5.31801 9.77154 4.96274 9.77154C2.83782 9.77154 1.21249 11.0222 0.414887 12.0704C0.342613 12.1653 0.294047 12.2762 0.273223 12.3937C0.2524 12.5112 0.259921 12.632 0.295161 12.7461C0.330401 12.8601 0.392343 12.9641 0.47584 13.0493C0.559337 13.1346 0.66198 13.1987 0.775239 13.2364C2.14601 13.6907 2.88612 14.345 3.30161 14.8653C3.47431 15.0816 3.42945 15.0757 3.5018 15.2139C2.33865 15.7924 1.48813 16.4874 1.48813 16.4874C1.38135 16.5915 1.30803 16.7251 1.27754 16.8711C1.24705 17.017 1.26078 17.1688 1.31696 17.307C1.37314 17.4451 1.46924 17.5634 1.59296 17.6467C1.71669 17.7299 1.86243 17.7744 2.01157 17.7745C2.7043 17.7745 3.38018 17.9078 3.90024 18.0401L3.33676 19.1954C3.27773 19.3165 3.25244 19.4514 3.26355 19.5857C3.27467 19.7201 3.32178 19.8489 3.39992 19.9587C3.47807 20.0686 3.58437 20.1553 3.70764 20.2098C3.83091 20.2644 3.9666 20.2847 4.10043 20.2686L7.69809 19.837C8.05534 20.3954 8.66133 20.9338 9.51743 21.4639C10.4397 22.035 11.6224 22.5245 12.9266 22.5245C14.2379 22.5245 15.4217 22.0356 16.3426 21.4639C17.2027 20.93 17.8089 20.3857 18.1629 19.8262L22.3485 20.7559C22.4938 20.788 22.6454 20.7761 22.7839 20.7218C22.9225 20.6675 23.0418 20.5732 23.1266 20.4509C23.2114 20.3286 23.2579 20.1839 23.2602 20.0351C23.2625 19.8863 23.2205 19.7401 23.1395 19.6153L21.9286 17.754L23.4559 16.628C23.5502 16.5587 23.6269 16.4682 23.68 16.364C23.733 16.2597 23.761 16.1444 23.7615 16.0274C23.7621 15.9104 23.7353 15.7949 23.6832 15.6901C23.6312 15.5853 23.5553 15.4941 23.4618 15.4239L22.2743 14.5333C22.8313 14.0923 23.2783 13.6472 23.5282 13.2559C23.902 12.6705 24.0018 12.1446 24.0018 12.1446C24.0193 12.0369 24.013 11.9268 23.9835 11.8218C23.9541 11.7168 23.9021 11.6195 23.8311 11.5367C23.7602 11.4538 23.672 11.3875 23.5728 11.3422C23.4736 11.2969 23.3657 11.2738 23.2567 11.2745C23.2567 11.2745 21.7787 11.2736 20.8065 11.2745C21.4511 10.5955 22.0674 9.87571 22.412 9.65826C22.5369 9.5795 22.6358 9.46562 22.6963 9.33088C22.7567 9.19615 22.7761 9.04656 22.7519 8.90087C22.7277 8.75518 22.661 8.61987 22.5603 8.51192C22.4595 8.40396 22.3291 8.32815 22.1854 8.294C22.1854 8.294 19.8918 7.73633 17.8504 8.59381C17.6799 8.35075 17.462 8.08529 17.1727 7.82623C16.6968 7.40009 15.9876 7.0677 15.1698 6.91314C15.1444 6.76359 15.1571 6.66649 15.1073 6.47174C14.9845 5.99179 14.7747 5.39988 14.4247 4.77252C13.7245 3.5178 12.4419 2.12391 10.2723 1.32037C10.1781 1.28547 10.0778 1.26986 9.97739 1.27447ZM14.0321 12.6924C13.9396 13.9926 13.7625 14.8145 13.7625 14.8145C13.7295 14.9134 13.7283 15.0201 13.7589 15.1198C13.7895 15.2194 13.8505 15.307 13.9334 15.3703C14.0162 15.4335 14.1168 15.4693 14.221 15.4726C14.3252 15.4759 14.4278 15.4466 14.5145 15.3887C15.1367 14.974 15.8078 14.3951 16.3338 13.9131V14.9131C15.6368 15.3048 14.5517 16.0352 13.7245 16.6143C13.6694 16.6514 13.6224 16.6992 13.586 16.7547C13.5496 16.8102 13.5246 16.8724 13.5125 16.9376C13.5004 17.0029 13.5014 17.0699 13.5155 17.1348C13.5296 17.1997 13.5564 17.2611 13.5945 17.3155C13.6325 17.3698 13.681 17.4161 13.7371 17.4516C13.7932 17.487 13.8559 17.5109 13.9213 17.5219C13.9868 17.5329 14.0538 17.5308 14.1184 17.5156C14.183 17.5005 14.244 17.4726 14.2977 17.4337C14.4238 17.3454 14.5836 17.2424 14.7235 17.1465C14.8205 17.3678 14.9939 17.5245 15.201 17.5245C15.51 17.5245 15.7616 17.1918 15.7616 16.7823C15.7616 16.6748 15.7429 16.5737 15.7118 16.4815C15.9376 16.3337 16.1371 16.2044 16.3338 16.0811V16.086C16.3338 16.2186 16.3865 16.3458 16.4803 16.4395C16.5741 16.5333 16.7012 16.586 16.8338 16.586C17.0575 16.586 17.2554 16.5708 17.4432 16.5499C17.4388 16.9501 17.3901 17.9472 16.994 18.8858C16.9735 18.9128 16.9549 18.9412 16.9383 18.9708C16.872 19.0883 16.3022 19.7236 15.5516 20.1895C14.801 20.6554 13.8549 21.0245 12.9266 21.0245C12.0083 21.0245 11.0607 20.6549 10.3075 20.1885C9.57733 19.7364 9.02372 19.133 8.93149 18.9922C8.62286 18.3134 8.50923 17.5928 8.46469 17.0694L8.79184 17.2598C8.8678 17.3041 8.9541 17.3276 9.04203 17.3279C9.12997 17.3282 9.21642 17.3053 9.29269 17.2615C9.36895 17.2178 9.43232 17.1546 9.47641 17.0786C9.52049 17.0025 9.54374 16.9161 9.54379 16.8282V16.0684C9.77764 16.2039 9.93749 16.2892 10.2166 16.46C10.1803 16.5583 10.1561 16.6655 10.1561 16.7823C10.1561 17.1918 10.4066 17.5245 10.7166 17.5245C10.9398 17.5245 11.1294 17.3477 11.2196 17.0977C11.3942 17.2125 11.576 17.3298 11.7245 17.4337C11.7782 17.4726 11.8392 17.5005 11.9038 17.5156C11.9684 17.5308 12.0354 17.5329 12.1008 17.5219C12.1663 17.5109 12.2289 17.487 12.285 17.4516C12.3411 17.4161 12.3896 17.3698 12.4277 17.3155C12.4657 17.2611 12.4926 17.1997 12.5066 17.1348C12.5207 17.0699 12.5217 17.0029 12.5096 16.9376C12.4975 16.8724 12.4726 16.8102 12.4362 16.7547C12.3998 16.6992 12.3527 16.6514 12.2977 16.6143C11.4515 16.0222 10.2475 15.2892 9.54379 14.9083V14.6016C9.54379 13.9434 9.77579 13.4217 10.034 12.9991C10.0617 13.6006 10.1519 14.2267 10.451 14.8253C10.4861 14.8955 10.5373 14.9565 10.6004 15.0032C10.6635 15.05 10.7367 15.0813 10.8141 15.0945C10.8915 15.1077 10.9709 15.1025 11.046 15.0793C11.121 15.0561 11.1895 15.0156 11.2459 14.961C11.2459 14.961 12.589 13.7432 14.0321 12.6924ZM19.2411 15.9844C19.1727 16.8292 18.8793 17.6225 18.2118 18.209C18.2066 18.2136 18.1994 18.2182 18.1942 18.2227C18.3731 17.4275 18.4451 16.733 18.4452 16.4678V16.4669L18.4481 16.4649L19.2411 15.9844ZM6.65317 16.0958L6.81723 16.1114L7.43149 16.4688C7.43163 16.7342 7.50375 17.4271 7.68247 18.2217C7.67762 18.2175 7.6707 18.2133 7.66586 18.209C7.66554 18.209 7.66521 18.209 7.66489 18.209C7.02701 17.6492 6.73768 16.8982 6.65317 16.0958ZM14.0086 18.918C13.8766 18.9206 13.7509 18.9754 13.659 19.0704C13.659 19.0704 13.4811 19.2745 13.0116 19.2745C12.5414 19.2745 12.3641 19.0704 12.3641 19.0704C12.3173 19.0225 12.2614 18.9846 12.1997 18.9587C12.1379 18.9329 12.0716 18.9197 12.0047 18.92C11.9052 18.9202 11.808 18.9501 11.7256 19.0058C11.6432 19.0616 11.5793 19.1407 11.5421 19.233C11.5048 19.3252 11.496 19.4265 11.5167 19.5239C11.5373 19.6212 11.5865 19.7102 11.6581 19.7794C11.6581 19.7794 12.1827 20.2745 13.0116 20.2745C13.8401 20.2745 14.3641 19.7794 14.3641 19.7794C14.4369 19.7098 14.4869 19.6198 14.5077 19.5213C14.5285 19.4228 14.5191 19.3203 14.4807 19.2272C14.4423 19.1341 14.3767 19.0548 14.2925 18.9997C14.2082 18.9445 14.1093 18.916 14.0086 18.918Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_524_184">
					<rect width={width} height={height} fill={color} />
				</clipPath>
			</defs>
		</svg>
	)
}
