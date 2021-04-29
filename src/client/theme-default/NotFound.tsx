import React from 'react'
import styled from 'styled-components'

const WrapNotFound = styled.main`
	body {
		width: 100%;
		height: 100%;
		background: #48a9e6;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		margin: 0;
		padding: 0;
	}

	#title {
		text-align: center;
		font-size: 40px;
		margin-top: 40px;
		margin-bottom: -40px;
		position: relative;
		color: #fff;
	}

	.circles {
		background: #fff;
		text-align: center;
		position: relative;
		margin-top: -60px;
	}

	.circles p {
		font-size: 240px;
		color: #fff;
		padding-top: 60px;
		position: relative;
		z-index: 9;
		line-height: 100%;
	}

	.circles p small {
		font-size: 40px;
		line-height: 100%;
		vertical-align: top;
	}

	.circles .circle.small {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: #48a9e6;
		position: absolute;
		z-index: 1;
		top: 80px;
		left: 50%;
		animation: 7s smallmove infinite cubic-bezier(1, 0.22, 0.71, 0.98);
		animation-delay: 1.2s;
	}

	.circles .circle.med {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: #48a9e6;
		position: absolute;
		z-index: 1;
		top: 0;
		left: 10%;
		animation: 7s medmove infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);
		animation-delay: 0.4s;
	}

	.circles .circle.big {
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: #48a9e6;
		position: absolute;
		z-index: 1;
		top: 200px;
		right: 0;
		animation: 8s bigmove infinite;
		animation-delay: 3s;
	}

	@-webkit-keyframes smallmove {
		0% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 40%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
	}
	@keyframes smallmove {
		0% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 40%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
	}

	@-webkit-keyframes medmove {
		0% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 80%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
	}

	@keyframes medmove {
		0% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 80%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
	}

	@-webkit-keyframes bigmove {
		0% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
		25% {
			top: 100px;
			right: 40%;
			opacity: 0.4;
		}
		50% {
			top: 240px;
			right: 45%;
			opacity: 0.8;
		}
		75% {
			top: 100px;
			right: 35%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
	}
	@keyframes bigmove {
		0% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
		25% {
			top: 100px;
			right: 40%;
			opacity: 0.4;
		}
		50% {
			top: 240px;
			right: 45%;
			opacity: 0.8;
		}
		75% {
			top: 100px;
			right: 35%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
	}
`

export default function NotFound() {
	return (
		<WrapNotFound>
			<div className="circles">
				<p>
					404
					<br />
					<small>PAGE NOT FOUND</small>
				</p>
				<span className="circle big"></span>
				<span className="circle med"></span>
				<span className="circle small"></span>
			</div>
		</WrapNotFound>
	)
}
