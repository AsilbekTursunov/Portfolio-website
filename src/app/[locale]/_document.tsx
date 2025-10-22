// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.src = 'https://emrldco.com/NDY4MjM1.js?t=468235';
                script.setAttribute('data-noptimize', '1');
                script.setAttribute('data-cfasync', 'false');
                script.setAttribute('data-wpfc-render', 'false');
                document.head.appendChild(script);
              })();
            `,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
