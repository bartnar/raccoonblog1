const tabletWidth = 1024;

window.onload = function () {
    let currWidth = window.innerWidth;
    contentPosition(currWidth);

    window.onresize = function () {
        let currWidth = window.innerWidth;
        contentPosition(currWidth);
    };
};
const Create = {
    renderTagsLaptop: () => {
        let view = /*html*/ `
                <div id="tags" class="tags">
                    <div class="tag">Raccoon</div>
                    <div class="tag">Raccoon</div>
                    <div class="tag">Coon</div>
                    <div class="tag">Dog</div>
                    <div class="tag">Cat</div>
                    <div class="tag">Developer</div>
                    <div class="tag">Raccoon</div>
                    <div class="tag">Raccoon</div>
                    <div class="tag">Coon</div>
                    <div class="tag">Dog</div>
                    <div class="tag">Cat</div>
                    <div class="tag">Developer</div>
                </div>
    
    `;
        return view;
    },
    renderTagsTablet: () => {
        let view = /*html*/ `
                <div id="tags" class="tags">
                    <div class="tag">Raccoon</div>
                    <div class="tag">Raccoon</div>
                    <div class="tag">Raccoon</div>
                    <div class="tag">Dog</div>
                    <div class="tag">Cat</div>
                    <div class="tag">Developer</div>
                    <div class="tag">Cat</div>
                    <div class="tag">Raccoon</div>
                    <div class="tag">Dog</div>
                    <div class="tag">Cat</div>
                    <div class="tag">Developer</div>
                    <div class="tag">Raccoon</div>
                    <div class="tag">Raccoon</div>
                </div>  
        `;
        return view;
    },
    renderContentLaptop: () => {
        let view = /*html*/ `
                        <div class="blog-post">
                            <div class="blog-post-image blogoflowers"></div>
                            <h3 class="blog-post-title">
                                Blogotitle of blogopost about blogoflowers
                            </h3>

                            <div class="blog-post-info">
                                <div class="blog-post-date">
                                    22:58 Jan 01, 2014
                                </div>
                                <div class="footprint"></div>
                                <div class="blog-post-author">
                                    by E.Hyperraccoon
                                </div>
                                <div class="blog-post-social">
                                    <svg
                                        class="facebook-icon social"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="25"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M.042.033h49.966v24.934H.042V.033zm9.857 20.899v-7.905h2.886l.118-2.84H9.898V8.104c0-.394.067-.705.2-.934.135-.229.453-.335.957-.32l1.777.001.071-2.651a6.462 6.462 0 00-.675-.059 13.131 13.131 0 01-.627-.035 9.124 9.124 0 00-.661-.024c-.694-.047-1.29.028-1.788.225a3.27 3.27 0 00-1.23.828A3.477 3.477 0 007.2 6.354a4.246 4.246 0 00-.237 1.395v2.438H4.929v2.84h2.034v7.904l2.935.001h.001z"
                                        />
                                    </svg>
                                    <span
                                        class="social-counter facebook-counter"
                                        >16</span
                                    >
                                    <svg
                                        class="gplus-icon social"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="25"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M.042.033h49.966v24.934H12.176c.369-.917.554-1.479.554-2.31 0-.683-.114-1.315-.342-1.899-.225-.584-.512-1.065-.857-1.441v-.003a16.36 16.36 0 00-1.116-1.1 16.081 16.081 0 00-1.116-.923 4.137 4.137 0 01-.86-.845c-.227-.304-.341-.613-.341-.923 0-.372.118-.723.356-1.054.238-.332.526-.648.868-.954.342-.304.681-.638 1.015-.999.335-.361.623-.843.86-1.442.238-.599.356-1.276.356-2.03 0-.753-.137-1.506-.411-2.255-.272-.749-.663-1.361-1.169-1.837a1.331 1.331 0 00-.216-.17 8.918 8.918 0 00-.193-.116.508.508 0 01-.154-.146 1.511 1.511 0 01-.164-.265l2.092.001 2.093-.992H6.658c-1.426 0-2.689.199-3.789.597C1.77 4.259.826 4.947.042 5.929V.033zm19.835 3.23h-1.983v3.968h-3.968v1.984h3.968v3.968h1.983V9.215h3.968V7.231h-3.968V3.263zm-9.419 21.704H.042v-2.674c.02-.314.359-.639.591-.908.979-1.128 2.45-1.605 3.887-1.798a12.305 12.305 0 011.658-.108c.332 0 .584.009.76.03.062.042.219.149.472.325.254.175.423.294.51.357.087.063.248.182.48.356.232.175.397.309.496.395.099.089.24.221.426.395.186.175.324.328.411.458.087.129.195.286.325.472.129.187.219.364.271.536.051.17.101.356.146.558.045.202.069.411.069.629 0 .291-.029.757-.086.977zM.042 19.864v-6.708c1.062 1.218 2.472 1.827 4.229 1.827.33 0 .691-.025 1.085-.077-.216.631-.325 1.075-.325 1.333 0 .692.325 1.462.977 2.31-2.418.071-4.407.509-5.966 1.315zm5.794-5.813a3.007 3.007 0 01-1.504-.402 3.998 3.998 0 01-1.208-1.047 7.496 7.496 0 01-.868-1.449 7.868 7.868 0 01-.55-1.613 7.091 7.091 0 01-.178-1.534c0-.992.265-1.845.797-2.558.532-.713 1.279-1.069 2.24-1.069.683 0 1.297.212 1.844.637.548.423.982.96 1.303 1.612.319.651.562 1.324.728 2.015.165.691.248 1.353.248 1.984 0 1.033-.226 1.862-.676 2.488-.449.625-1.175.938-2.176.938v-.002z"
                                        />
                                    </svg>
                                    <span class="social-counter gplus-counter"
                                        >7</span
                                    >
                                    <svg
                                        class="twitter-icon social"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="25"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M.042.033h49.966v24.934H.042V.033zM21.529 6.03a8.328 8.328 0 01-1.947.59 4.316 4.316 0 001.519-2.135.102.102 0 00-.033-.112.104.104 0 00-.117-.008 8.352 8.352 0 01-2.59 1 4.34 4.34 0 00-3.114-1.323 4.326 4.326 0 00-4.238 5.173 11.914 11.914 0 01-8.486-4.362.095.095 0 00-.088-.038.1.1 0 00-.081.051 4.321 4.321 0 001.041 5.555 4.128 4.128 0 01-1.507-.489c-.032-.018-.036-.017-.066.001-.032.018-.018.051-.018.087v.057c0 1.902 1.219 3.572 3.003 4.127-.471.077-.974.07-1.454-.02a.124.124 0 00-.105.032c-.023.028-.037.065-.026.1a4.32 4.32 0 003.75 2.986 8.317 8.317 0 01-4.952 1.614c-.333 0-.666-.02-.995-.06a.109.109 0 00-.111.068.103.103 0 00.042.122 12.06 12.06 0 006.522 1.912c7.576 0 12.104-6.154 12.104-12.106 0-.165-.004-.33-.01-.495a8.593 8.593 0 002.084-2.176.102.102 0 00-.006-.123.105.105 0 00-.122-.028h.001z"
                                        />
                                    </svg>
                                    <span class="social-counter twitter-counter"
                                        >15</span
                                    >
                                    <svg
                                        class="vk-icon social"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="25"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M.042.033h49.966v24.934H.042V.033zm12.18 13.922c-.538-.321-1.284-.321-1.892-.321H8.337v4.24h1.829c.677 0 1.542.049 2.125-.374.535-.373.838-1.105.838-1.799 0-.648-.372-1.421-.908-1.746h.001zm-.752-3.618c.444-.349.675-.97.675-1.542 0-.622-.28-1.219-.792-1.542-.537-.323-1.517-.249-2.147-.249h-.868v3.732h1.148c.654-.001 1.424.049 1.984-.399zm-.146 10.694H4.476V3.969h7.483c2.166 0 4.166 1.424 4.166 3.936 0 1.939-1.051 3.268-2.387 3.681v.05c1.982.423 3.401 1.535 3.401 4.219 0 2.483-1.639 5.175-5.815 5.175v.001z"
                                        />
                                    </svg>
                                    <span class="social-counter vk-counter"
                                        >16</span
                                    >
                                    <svg
                                        class="yandex-icon social"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="25"
                                        shape-rendering="geometricPrecision"
                                        text-rendering="geometricPrecision"
                                        image-rendering="optimizeQuality"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    >
                                        <path
                                            d="M.042.033h49.966v24.934H.042V.033zm11.083 4.729c.004 1.178-.988 2.123-2.218 2.115-1.226-.007-2.211-.961-2.205-2.134.006-1.132 1-2.083 2.194-2.1 1.208-.016 2.228.952 2.228 2.119h.001zM7.298 15.159c-.498-.217-.997-.372-1.426-.634-1.423-.87-2.057-2.813-1.532-4.559.456-1.468 1.555-2.331 3.064-2.354 1.041-.017 2.082-.001 3.126-.002 1.702-.004 2.806-1.032 2.885-2.697.023-.544-.012-1.088.017-1.629.023-.418.297-.651.718-.663.425-.011.744.229.741.631-.008.969.042 1.965-.17 2.901-.416 1.841-1.788 2.831-4.09 3.134v.648c0 3.895.001 7.791-.002 11.685 0 .743-.26.998-.989.993-.673-.005-.95-.261-.953-.916-.006-1.554-.002-3.109-.002-4.662v-.446c-.033-.015-.065-.027-.097-.042-.08.148-.168.293-.24.446-.766 1.572-1.526 3.145-2.294 4.717-.387.794-1.206 1.14-2.073.88-.416-.123-.397-.407-.24-.713.43-.836.87-1.668 1.306-2.502.554-1.068 1.744-3.257 2.253-4.215l-.002-.001zm1.25-5.781c-1.278.107-1.903.028-2.366.684-.557.788-.402 1.691.135 2.492.411.613 1.133.741 2.244.795.02-1.71-.013-2.098-.013-3.971z"
                                        />
                                    </svg>
                                    <span class="social-counter yandex-counter"
                                        >1</span
                                    >
                                </div>
                            </div>

                            <div class="blog-post-content">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Nulla et, tenetur fugiat, eius
                                numquam consequatur consequuntur ducimus autem,
                                possimus nisi aut quod. Dolores vitae,
                                voluptates fugiat pariatur omnis dolore
                                corporis.
                            </div>
                    </div>
                    <div class="blog-post">
                        <div class="blog-post-image colorful"></div>
                        <h3 class="blog-post-title">
                            Blogotitle about colorful
                        </h3>
                        <div class="blog-post-info">
                            <div class="blog-post-date">22:50 Jan 01, 2014</div>
                            <div class="footprint"></div>
                            <div class="blog-post-author">
                                by E.Hyperraccoon
                            </div>
                            <div class="blog-post-social">
                                <svg
                                    class="facebook-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zm9.857 20.899v-7.905h2.886l.118-2.84H9.898V8.104c0-.394.067-.705.2-.934.135-.229.453-.335.957-.32l1.777.001.071-2.651a6.462 6.462 0 00-.675-.059 13.131 13.131 0 01-.627-.035 9.124 9.124 0 00-.661-.024c-.694-.047-1.29.028-1.788.225a3.27 3.27 0 00-1.23.828A3.477 3.477 0 007.2 6.354a4.246 4.246 0 00-.237 1.395v2.438H4.929v2.84h2.034v7.904l2.935.001h.001z"
                                    />
                                </svg>
                                <span class="social-counter facebook-counter"
                                    >16</span
                                >
                                <svg
                                    class="gplus-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H12.176c.369-.917.554-1.479.554-2.31 0-.683-.114-1.315-.342-1.899-.225-.584-.512-1.065-.857-1.441v-.003a16.36 16.36 0 00-1.116-1.1 16.081 16.081 0 00-1.116-.923 4.137 4.137 0 01-.86-.845c-.227-.304-.341-.613-.341-.923 0-.372.118-.723.356-1.054.238-.332.526-.648.868-.954.342-.304.681-.638 1.015-.999.335-.361.623-.843.86-1.442.238-.599.356-1.276.356-2.03 0-.753-.137-1.506-.411-2.255-.272-.749-.663-1.361-1.169-1.837a1.331 1.331 0 00-.216-.17 8.918 8.918 0 00-.193-.116.508.508 0 01-.154-.146 1.511 1.511 0 01-.164-.265l2.092.001 2.093-.992H6.658c-1.426 0-2.689.199-3.789.597C1.77 4.259.826 4.947.042 5.929V.033zm19.835 3.23h-1.983v3.968h-3.968v1.984h3.968v3.968h1.983V9.215h3.968V7.231h-3.968V3.263zm-9.419 21.704H.042v-2.674c.02-.314.359-.639.591-.908.979-1.128 2.45-1.605 3.887-1.798a12.305 12.305 0 011.658-.108c.332 0 .584.009.76.03.062.042.219.149.472.325.254.175.423.294.51.357.087.063.248.182.48.356.232.175.397.309.496.395.099.089.24.221.426.395.186.175.324.328.411.458.087.129.195.286.325.472.129.187.219.364.271.536.051.17.101.356.146.558.045.202.069.411.069.629 0 .291-.029.757-.086.977zM.042 19.864v-6.708c1.062 1.218 2.472 1.827 4.229 1.827.33 0 .691-.025 1.085-.077-.216.631-.325 1.075-.325 1.333 0 .692.325 1.462.977 2.31-2.418.071-4.407.509-5.966 1.315zm5.794-5.813a3.007 3.007 0 01-1.504-.402 3.998 3.998 0 01-1.208-1.047 7.496 7.496 0 01-.868-1.449 7.868 7.868 0 01-.55-1.613 7.091 7.091 0 01-.178-1.534c0-.992.265-1.845.797-2.558.532-.713 1.279-1.069 2.24-1.069.683 0 1.297.212 1.844.637.548.423.982.96 1.303 1.612.319.651.562 1.324.728 2.015.165.691.248 1.353.248 1.984 0 1.033-.226 1.862-.676 2.488-.449.625-1.175.938-2.176.938v-.002z"
                                    />
                                </svg>
                                <span class="social-counter gplus-counter"
                                    >7</span
                                >
                                <svg
                                    class="twitter-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zM21.529 6.03a8.328 8.328 0 01-1.947.59 4.316 4.316 0 001.519-2.135.102.102 0 00-.033-.112.104.104 0 00-.117-.008 8.352 8.352 0 01-2.59 1 4.34 4.34 0 00-3.114-1.323 4.326 4.326 0 00-4.238 5.173 11.914 11.914 0 01-8.486-4.362.095.095 0 00-.088-.038.1.1 0 00-.081.051 4.321 4.321 0 001.041 5.555 4.128 4.128 0 01-1.507-.489c-.032-.018-.036-.017-.066.001-.032.018-.018.051-.018.087v.057c0 1.902 1.219 3.572 3.003 4.127-.471.077-.974.07-1.454-.02a.124.124 0 00-.105.032c-.023.028-.037.065-.026.1a4.32 4.32 0 003.75 2.986 8.317 8.317 0 01-4.952 1.614c-.333 0-.666-.02-.995-.06a.109.109 0 00-.111.068.103.103 0 00.042.122 12.06 12.06 0 006.522 1.912c7.576 0 12.104-6.154 12.104-12.106 0-.165-.004-.33-.01-.495a8.593 8.593 0 002.084-2.176.102.102 0 00-.006-.123.105.105 0 00-.122-.028h.001z"
                                    />
                                </svg>
                                <span class="social-counter twitter-counter"
                                    >15</span
                                >
                                <svg
                                    class="vk-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zm12.18 13.922c-.538-.321-1.284-.321-1.892-.321H8.337v4.24h1.829c.677 0 1.542.049 2.125-.374.535-.373.838-1.105.838-1.799 0-.648-.372-1.421-.908-1.746h.001zm-.752-3.618c.444-.349.675-.97.675-1.542 0-.622-.28-1.219-.792-1.542-.537-.323-1.517-.249-2.147-.249h-.868v3.732h1.148c.654-.001 1.424.049 1.984-.399zm-.146 10.694H4.476V3.969h7.483c2.166 0 4.166 1.424 4.166 3.936 0 1.939-1.051 3.268-2.387 3.681v.05c1.982.423 3.401 1.535 3.401 4.219 0 2.483-1.639 5.175-5.815 5.175v.001z"
                                    />
                                </svg>
                                <span class="social-counter vk-counter"
                                    >16</span
                                >
                                <svg
                                    class="yandex-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zm11.083 4.729c.004 1.178-.988 2.123-2.218 2.115-1.226-.007-2.211-.961-2.205-2.134.006-1.132 1-2.083 2.194-2.1 1.208-.016 2.228.952 2.228 2.119h.001zM7.298 15.159c-.498-.217-.997-.372-1.426-.634-1.423-.87-2.057-2.813-1.532-4.559.456-1.468 1.555-2.331 3.064-2.354 1.041-.017 2.082-.001 3.126-.002 1.702-.004 2.806-1.032 2.885-2.697.023-.544-.012-1.088.017-1.629.023-.418.297-.651.718-.663.425-.011.744.229.741.631-.008.969.042 1.965-.17 2.901-.416 1.841-1.788 2.831-4.09 3.134v.648c0 3.895.001 7.791-.002 11.685 0 .743-.26.998-.989.993-.673-.005-.95-.261-.953-.916-.006-1.554-.002-3.109-.002-4.662v-.446c-.033-.015-.065-.027-.097-.042-.08.148-.168.293-.24.446-.766 1.572-1.526 3.145-2.294 4.717-.387.794-1.206 1.14-2.073.88-.416-.123-.397-.407-.24-.713.43-.836.87-1.668 1.306-2.502.554-1.068 1.744-3.257 2.253-4.215l-.002-.001zm1.25-5.781c-1.278.107-1.903.028-2.366.684-.557.788-.402 1.691.135 2.492.411.613 1.133.741 2.244.795.02-1.71-.013-2.098-.013-3.971z"
                                    />
                                </svg>
                                <span class="social-counter yandex-counter"
                                    >1</span
                                >
                            </div>
                        </div>
                        <div class="blog-post-content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nulla et, tenetur fugiat, eius numquam
                            consequatur consequuntur ducimus autem, possimus
                            nisi aut quod. Dolores vitae, voluptates fugiat
                            pariatur omnis dolore corporis.
                        </div>
                    </div>
                    <div class="blog-post">
                        <div class="blog-post-image colorful"></div>
                        <h3 class="blog-post-title">
                            Blogotitle about colorful
                        </h3>
                        <div class="blog-post-info">
                            <div class="blog-post-date">22:50 Jan 01, 2014</div>
                            <div class="footprint"></div>
                            <div class="blog-post-author">
                                by E.Hyperraccoon
                            </div>
                            <div class="blog-post-social">
                                <svg
                                    class="facebook-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zm9.857 20.899v-7.905h2.886l.118-2.84H9.898V8.104c0-.394.067-.705.2-.934.135-.229.453-.335.957-.32l1.777.001.071-2.651a6.462 6.462 0 00-.675-.059 13.131 13.131 0 01-.627-.035 9.124 9.124 0 00-.661-.024c-.694-.047-1.29.028-1.788.225a3.27 3.27 0 00-1.23.828A3.477 3.477 0 007.2 6.354a4.246 4.246 0 00-.237 1.395v2.438H4.929v2.84h2.034v7.904l2.935.001h.001z"
                                    />
                                </svg>
                                <span class="social-counter facebook-counter"
                                    >16</span
                                >
                                <svg
                                    class="gplus-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H12.176c.369-.917.554-1.479.554-2.31 0-.683-.114-1.315-.342-1.899-.225-.584-.512-1.065-.857-1.441v-.003a16.36 16.36 0 00-1.116-1.1 16.081 16.081 0 00-1.116-.923 4.137 4.137 0 01-.86-.845c-.227-.304-.341-.613-.341-.923 0-.372.118-.723.356-1.054.238-.332.526-.648.868-.954.342-.304.681-.638 1.015-.999.335-.361.623-.843.86-1.442.238-.599.356-1.276.356-2.03 0-.753-.137-1.506-.411-2.255-.272-.749-.663-1.361-1.169-1.837a1.331 1.331 0 00-.216-.17 8.918 8.918 0 00-.193-.116.508.508 0 01-.154-.146 1.511 1.511 0 01-.164-.265l2.092.001 2.093-.992H6.658c-1.426 0-2.689.199-3.789.597C1.77 4.259.826 4.947.042 5.929V.033zm19.835 3.23h-1.983v3.968h-3.968v1.984h3.968v3.968h1.983V9.215h3.968V7.231h-3.968V3.263zm-9.419 21.704H.042v-2.674c.02-.314.359-.639.591-.908.979-1.128 2.45-1.605 3.887-1.798a12.305 12.305 0 011.658-.108c.332 0 .584.009.76.03.062.042.219.149.472.325.254.175.423.294.51.357.087.063.248.182.48.356.232.175.397.309.496.395.099.089.24.221.426.395.186.175.324.328.411.458.087.129.195.286.325.472.129.187.219.364.271.536.051.17.101.356.146.558.045.202.069.411.069.629 0 .291-.029.757-.086.977zM.042 19.864v-6.708c1.062 1.218 2.472 1.827 4.229 1.827.33 0 .691-.025 1.085-.077-.216.631-.325 1.075-.325 1.333 0 .692.325 1.462.977 2.31-2.418.071-4.407.509-5.966 1.315zm5.794-5.813a3.007 3.007 0 01-1.504-.402 3.998 3.998 0 01-1.208-1.047 7.496 7.496 0 01-.868-1.449 7.868 7.868 0 01-.55-1.613 7.091 7.091 0 01-.178-1.534c0-.992.265-1.845.797-2.558.532-.713 1.279-1.069 2.24-1.069.683 0 1.297.212 1.844.637.548.423.982.96 1.303 1.612.319.651.562 1.324.728 2.015.165.691.248 1.353.248 1.984 0 1.033-.226 1.862-.676 2.488-.449.625-1.175.938-2.176.938v-.002z"
                                    />
                                </svg>
                                <span class="social-counter gplus-counter"
                                    >7</span
                                >
                                <svg
                                    class="twitter-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zM21.529 6.03a8.328 8.328 0 01-1.947.59 4.316 4.316 0 001.519-2.135.102.102 0 00-.033-.112.104.104 0 00-.117-.008 8.352 8.352 0 01-2.59 1 4.34 4.34 0 00-3.114-1.323 4.326 4.326 0 00-4.238 5.173 11.914 11.914 0 01-8.486-4.362.095.095 0 00-.088-.038.1.1 0 00-.081.051 4.321 4.321 0 001.041 5.555 4.128 4.128 0 01-1.507-.489c-.032-.018-.036-.017-.066.001-.032.018-.018.051-.018.087v.057c0 1.902 1.219 3.572 3.003 4.127-.471.077-.974.07-1.454-.02a.124.124 0 00-.105.032c-.023.028-.037.065-.026.1a4.32 4.32 0 003.75 2.986 8.317 8.317 0 01-4.952 1.614c-.333 0-.666-.02-.995-.06a.109.109 0 00-.111.068.103.103 0 00.042.122 12.06 12.06 0 006.522 1.912c7.576 0 12.104-6.154 12.104-12.106 0-.165-.004-.33-.01-.495a8.593 8.593 0 002.084-2.176.102.102 0 00-.006-.123.105.105 0 00-.122-.028h.001z"
                                    />
                                </svg>
                                <span class="social-counter twitter-counter"
                                    >15</span
                                >
                                <svg
                                    class="vk-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zm12.18 13.922c-.538-.321-1.284-.321-1.892-.321H8.337v4.24h1.829c.677 0 1.542.049 2.125-.374.535-.373.838-1.105.838-1.799 0-.648-.372-1.421-.908-1.746h.001zm-.752-3.618c.444-.349.675-.97.675-1.542 0-.622-.28-1.219-.792-1.542-.537-.323-1.517-.249-2.147-.249h-.868v3.732h1.148c.654-.001 1.424.049 1.984-.399zm-.146 10.694H4.476V3.969h7.483c2.166 0 4.166 1.424 4.166 3.936 0 1.939-1.051 3.268-2.387 3.681v.05c1.982.423 3.401 1.535 3.401 4.219 0 2.483-1.639 5.175-5.815 5.175v.001z"
                                    />
                                </svg>
                                <span class="social-counter vk-counter"
                                    >16</span
                                >
                                <svg
                                    class="yandex-icon social"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="25"
                                    shape-rendering="geometricPrecision"
                                    text-rendering="geometricPrecision"
                                    image-rendering="optimizeQuality"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path
                                        d="M.042.033h49.966v24.934H.042V.033zm11.083 4.729c.004 1.178-.988 2.123-2.218 2.115-1.226-.007-2.211-.961-2.205-2.134.006-1.132 1-2.083 2.194-2.1 1.208-.016 2.228.952 2.228 2.119h.001zM7.298 15.159c-.498-.217-.997-.372-1.426-.634-1.423-.87-2.057-2.813-1.532-4.559.456-1.468 1.555-2.331 3.064-2.354 1.041-.017 2.082-.001 3.126-.002 1.702-.004 2.806-1.032 2.885-2.697.023-.544-.012-1.088.017-1.629.023-.418.297-.651.718-.663.425-.011.744.229.741.631-.008.969.042 1.965-.17 2.901-.416 1.841-1.788 2.831-4.09 3.134v.648c0 3.895.001 7.791-.002 11.685 0 .743-.26.998-.989.993-.673-.005-.95-.261-.953-.916-.006-1.554-.002-3.109-.002-4.662v-.446c-.033-.015-.065-.027-.097-.042-.08.148-.168.293-.24.446-.766 1.572-1.526 3.145-2.294 4.717-.387.794-1.206 1.14-2.073.88-.416-.123-.397-.407-.24-.713.43-.836.87-1.668 1.306-2.502.554-1.068 1.744-3.257 2.253-4.215l-.002-.001zm1.25-5.781c-1.278.107-1.903.028-2.366.684-.557.788-.402 1.691.135 2.492.411.613 1.133.741 2.244.795.02-1.71-.013-2.098-.013-3.971z"
                                    />
                                </svg>
                                <span class="social-counter yandex-counter"
                                    >1</span
                                >
                            </div>
                        </div>
                        <div class="blog-post-content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nulla et, tenetur fugiat, eius numquam
                            consequatur consequuntur ducimus autem, possimus
                            nisi aut quod. Dolores vitae, voluptates fugiat
                            pariatur omnis dolore corporis.
                        </div>
                    </div>
        `;
        return view;
    },
    renderContentTablet: () => {
        let view = /*html*/ `
        <div class="blog-post-wrapper">
            <div class="blog-post">
                <div class="blog-post-image blogoflowers"></div>
                <h3 class="blog-post-title">
                    Blogotitle of blogopost about blogoflowers
                </h3>

                <div class="blog-post-info">
                    <div class="blog-post-date">
                        22:58 Jan 01, 2014
                    </div>
                    <div class="footprint"></div>
                    <div class="blog-post-author">
                        by E.Hyperraccoon
                    </div> 
                </div>
                <div class="blog-post-content">
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Nulla et, tenetur fugiat, eius
                    numquam consequatur consequuntur ducimus autem,
                    possimus nisi aut quod. Dolores vitae,
                    voluptates fugiat pariatur omnis dolore
                    corporis.
                </div>
            </div>
            <div class="blog-post-social">
                    <svg
                        class="facebook-icon social"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="25"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    >
                        <path
                            d="M.042.033h49.966v24.934H.042V.033zm9.857 20.899v-7.905h2.886l.118-2.84H9.898V8.104c0-.394.067-.705.2-.934.135-.229.453-.335.957-.32l1.777.001.071-2.651a6.462 6.462 0 00-.675-.059 13.131 13.131 0 01-.627-.035 9.124 9.124 0 00-.661-.024c-.694-.047-1.29.028-1.788.225a3.27 3.27 0 00-1.23.828A3.477 3.477 0 007.2 6.354a4.246 4.246 0 00-.237 1.395v2.438H4.929v2.84h2.034v7.904l2.935.001h.001z"
                        />
                    </svg>
                    <span
                        class="social-counter facebook-counter"
                        >16</span
                    >
                    <svg
                        class="gplus-icon social"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="25"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    >
                        <path
                            d="M.042.033h49.966v24.934H12.176c.369-.917.554-1.479.554-2.31 0-.683-.114-1.315-.342-1.899-.225-.584-.512-1.065-.857-1.441v-.003a16.36 16.36 0 00-1.116-1.1 16.081 16.081 0 00-1.116-.923 4.137 4.137 0 01-.86-.845c-.227-.304-.341-.613-.341-.923 0-.372.118-.723.356-1.054.238-.332.526-.648.868-.954.342-.304.681-.638 1.015-.999.335-.361.623-.843.86-1.442.238-.599.356-1.276.356-2.03 0-.753-.137-1.506-.411-2.255-.272-.749-.663-1.361-1.169-1.837a1.331 1.331 0 00-.216-.17 8.918 8.918 0 00-.193-.116.508.508 0 01-.154-.146 1.511 1.511 0 01-.164-.265l2.092.001 2.093-.992H6.658c-1.426 0-2.689.199-3.789.597C1.77 4.259.826 4.947.042 5.929V.033zm19.835 3.23h-1.983v3.968h-3.968v1.984h3.968v3.968h1.983V9.215h3.968V7.231h-3.968V3.263zm-9.419 21.704H.042v-2.674c.02-.314.359-.639.591-.908.979-1.128 2.45-1.605 3.887-1.798a12.305 12.305 0 011.658-.108c.332 0 .584.009.76.03.062.042.219.149.472.325.254.175.423.294.51.357.087.063.248.182.48.356.232.175.397.309.496.395.099.089.24.221.426.395.186.175.324.328.411.458.087.129.195.286.325.472.129.187.219.364.271.536.051.17.101.356.146.558.045.202.069.411.069.629 0 .291-.029.757-.086.977zM.042 19.864v-6.708c1.062 1.218 2.472 1.827 4.229 1.827.33 0 .691-.025 1.085-.077-.216.631-.325 1.075-.325 1.333 0 .692.325 1.462.977 2.31-2.418.071-4.407.509-5.966 1.315zm5.794-5.813a3.007 3.007 0 01-1.504-.402 3.998 3.998 0 01-1.208-1.047 7.496 7.496 0 01-.868-1.449 7.868 7.868 0 01-.55-1.613 7.091 7.091 0 01-.178-1.534c0-.992.265-1.845.797-2.558.532-.713 1.279-1.069 2.24-1.069.683 0 1.297.212 1.844.637.548.423.982.96 1.303 1.612.319.651.562 1.324.728 2.015.165.691.248 1.353.248 1.984 0 1.033-.226 1.862-.676 2.488-.449.625-1.175.938-2.176.938v-.002z"
                        />
                    </svg>
                    <span class="social-counter gplus-counter"
                        >7</span
                    >
                    <svg
                        class="twitter-icon social"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="25"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    >
                        <path
                            d="M.042.033h49.966v24.934H.042V.033zM21.529 6.03a8.328 8.328 0 01-1.947.59 4.316 4.316 0 001.519-2.135.102.102 0 00-.033-.112.104.104 0 00-.117-.008 8.352 8.352 0 01-2.59 1 4.34 4.34 0 00-3.114-1.323 4.326 4.326 0 00-4.238 5.173 11.914 11.914 0 01-8.486-4.362.095.095 0 00-.088-.038.1.1 0 00-.081.051 4.321 4.321 0 001.041 5.555 4.128 4.128 0 01-1.507-.489c-.032-.018-.036-.017-.066.001-.032.018-.018.051-.018.087v.057c0 1.902 1.219 3.572 3.003 4.127-.471.077-.974.07-1.454-.02a.124.124 0 00-.105.032c-.023.028-.037.065-.026.1a4.32 4.32 0 003.75 2.986 8.317 8.317 0 01-4.952 1.614c-.333 0-.666-.02-.995-.06a.109.109 0 00-.111.068.103.103 0 00.042.122 12.06 12.06 0 006.522 1.912c7.576 0 12.104-6.154 12.104-12.106 0-.165-.004-.33-.01-.495a8.593 8.593 0 002.084-2.176.102.102 0 00-.006-.123.105.105 0 00-.122-.028h.001z"
                        />
                    </svg>
                    <span class="social-counter twitter-counter"
                        >15</span
                    >
                    <svg
                        class="vk-icon social"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="25"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    >
                        <path
                            d="M.042.033h49.966v24.934H.042V.033zm12.18 13.922c-.538-.321-1.284-.321-1.892-.321H8.337v4.24h1.829c.677 0 1.542.049 2.125-.374.535-.373.838-1.105.838-1.799 0-.648-.372-1.421-.908-1.746h.001zm-.752-3.618c.444-.349.675-.97.675-1.542 0-.622-.28-1.219-.792-1.542-.537-.323-1.517-.249-2.147-.249h-.868v3.732h1.148c.654-.001 1.424.049 1.984-.399zm-.146 10.694H4.476V3.969h7.483c2.166 0 4.166 1.424 4.166 3.936 0 1.939-1.051 3.268-2.387 3.681v.05c1.982.423 3.401 1.535 3.401 4.219 0 2.483-1.639 5.175-5.815 5.175v.001z"
                        />
                    </svg>
                    <span class="social-counter vk-counter"
                        >16</span
                    >
                    <svg
                        class="yandex-icon social"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="25"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    >
                        <path
                            d="M.042.033h49.966v24.934H.042V.033zm11.083 4.729c.004 1.178-.988 2.123-2.218 2.115-1.226-.007-2.211-.961-2.205-2.134.006-1.132 1-2.083 2.194-2.1 1.208-.016 2.228.952 2.228 2.119h.001zM7.298 15.159c-.498-.217-.997-.372-1.426-.634-1.423-.87-2.057-2.813-1.532-4.559.456-1.468 1.555-2.331 3.064-2.354 1.041-.017 2.082-.001 3.126-.002 1.702-.004 2.806-1.032 2.885-2.697.023-.544-.012-1.088.017-1.629.023-.418.297-.651.718-.663.425-.011.744.229.741.631-.008.969.042 1.965-.17 2.901-.416 1.841-1.788 2.831-4.09 3.134v.648c0 3.895.001 7.791-.002 11.685 0 .743-.26.998-.989.993-.673-.005-.95-.261-.953-.916-.006-1.554-.002-3.109-.002-4.662v-.446c-.033-.015-.065-.027-.097-.042-.08.148-.168.293-.24.446-.766 1.572-1.526 3.145-2.294 4.717-.387.794-1.206 1.14-2.073.88-.416-.123-.397-.407-.24-.713.43-.836.87-1.668 1.306-2.502.554-1.068 1.744-3.257 2.253-4.215l-.002-.001zm1.25-5.781c-1.278.107-1.903.028-2.366.684-.557.788-.402 1.691.135 2.492.411.613 1.133.741 2.244.795.02-1.71-.013-2.098-.013-3.971z"
                        />
                    </svg>
                    <span class="social-counter yandex-counter"
                        >1</span
                    >
            </div>
        </div>
        <div class="blog-post-wrapper">
            <div class="blog-post">
                <div class="blog-post-image colorful"></div>
                <h3 class="blog-post-title">
                    Blogotitle about colorful
                </h3>
                <div class="blog-post-info">
                    <div class="blog-post-date">22:50 Jan 01, 2014</div>
                    <div class="footprint"></div>
                    <div class="blog-post-author">
                        by E.Hyperraccoon
                    </div>
                    
                </div>
                <div class="blog-post-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Nulla et, tenetur fugiat, eius numquam
                    consequatur consequuntur ducimus autem, possimus
                    nisi aut quod. Dolores vitae, voluptates fugiat
                    pariatur omnis dolore corporis.
                </div>
            </div>
            <div class="blog-post-social">
                        <svg
                            class="facebook-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zm9.857 20.899v-7.905h2.886l.118-2.84H9.898V8.104c0-.394.067-.705.2-.934.135-.229.453-.335.957-.32l1.777.001.071-2.651a6.462 6.462 0 00-.675-.059 13.131 13.131 0 01-.627-.035 9.124 9.124 0 00-.661-.024c-.694-.047-1.29.028-1.788.225a3.27 3.27 0 00-1.23.828A3.477 3.477 0 007.2 6.354a4.246 4.246 0 00-.237 1.395v2.438H4.929v2.84h2.034v7.904l2.935.001h.001z"
                            />
                        </svg>
                        <span class="social-counter facebook-counter"
                            >16</span
                        >
                        <svg
                            class="gplus-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H12.176c.369-.917.554-1.479.554-2.31 0-.683-.114-1.315-.342-1.899-.225-.584-.512-1.065-.857-1.441v-.003a16.36 16.36 0 00-1.116-1.1 16.081 16.081 0 00-1.116-.923 4.137 4.137 0 01-.86-.845c-.227-.304-.341-.613-.341-.923 0-.372.118-.723.356-1.054.238-.332.526-.648.868-.954.342-.304.681-.638 1.015-.999.335-.361.623-.843.86-1.442.238-.599.356-1.276.356-2.03 0-.753-.137-1.506-.411-2.255-.272-.749-.663-1.361-1.169-1.837a1.331 1.331 0 00-.216-.17 8.918 8.918 0 00-.193-.116.508.508 0 01-.154-.146 1.511 1.511 0 01-.164-.265l2.092.001 2.093-.992H6.658c-1.426 0-2.689.199-3.789.597C1.77 4.259.826 4.947.042 5.929V.033zm19.835 3.23h-1.983v3.968h-3.968v1.984h3.968v3.968h1.983V9.215h3.968V7.231h-3.968V3.263zm-9.419 21.704H.042v-2.674c.02-.314.359-.639.591-.908.979-1.128 2.45-1.605 3.887-1.798a12.305 12.305 0 011.658-.108c.332 0 .584.009.76.03.062.042.219.149.472.325.254.175.423.294.51.357.087.063.248.182.48.356.232.175.397.309.496.395.099.089.24.221.426.395.186.175.324.328.411.458.087.129.195.286.325.472.129.187.219.364.271.536.051.17.101.356.146.558.045.202.069.411.069.629 0 .291-.029.757-.086.977zM.042 19.864v-6.708c1.062 1.218 2.472 1.827 4.229 1.827.33 0 .691-.025 1.085-.077-.216.631-.325 1.075-.325 1.333 0 .692.325 1.462.977 2.31-2.418.071-4.407.509-5.966 1.315zm5.794-5.813a3.007 3.007 0 01-1.504-.402 3.998 3.998 0 01-1.208-1.047 7.496 7.496 0 01-.868-1.449 7.868 7.868 0 01-.55-1.613 7.091 7.091 0 01-.178-1.534c0-.992.265-1.845.797-2.558.532-.713 1.279-1.069 2.24-1.069.683 0 1.297.212 1.844.637.548.423.982.96 1.303 1.612.319.651.562 1.324.728 2.015.165.691.248 1.353.248 1.984 0 1.033-.226 1.862-.676 2.488-.449.625-1.175.938-2.176.938v-.002z"
                            />
                        </svg>
                        <span class="social-counter gplus-counter"
                            >7</span
                        >
                        <svg
                            class="twitter-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zM21.529 6.03a8.328 8.328 0 01-1.947.59 4.316 4.316 0 001.519-2.135.102.102 0 00-.033-.112.104.104 0 00-.117-.008 8.352 8.352 0 01-2.59 1 4.34 4.34 0 00-3.114-1.323 4.326 4.326 0 00-4.238 5.173 11.914 11.914 0 01-8.486-4.362.095.095 0 00-.088-.038.1.1 0 00-.081.051 4.321 4.321 0 001.041 5.555 4.128 4.128 0 01-1.507-.489c-.032-.018-.036-.017-.066.001-.032.018-.018.051-.018.087v.057c0 1.902 1.219 3.572 3.003 4.127-.471.077-.974.07-1.454-.02a.124.124 0 00-.105.032c-.023.028-.037.065-.026.1a4.32 4.32 0 003.75 2.986 8.317 8.317 0 01-4.952 1.614c-.333 0-.666-.02-.995-.06a.109.109 0 00-.111.068.103.103 0 00.042.122 12.06 12.06 0 006.522 1.912c7.576 0 12.104-6.154 12.104-12.106 0-.165-.004-.33-.01-.495a8.593 8.593 0 002.084-2.176.102.102 0 00-.006-.123.105.105 0 00-.122-.028h.001z"
                            />
                        </svg>
                        <span class="social-counter twitter-counter"
                            >15</span
                        >
                        <svg
                            class="vk-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zm12.18 13.922c-.538-.321-1.284-.321-1.892-.321H8.337v4.24h1.829c.677 0 1.542.049 2.125-.374.535-.373.838-1.105.838-1.799 0-.648-.372-1.421-.908-1.746h.001zm-.752-3.618c.444-.349.675-.97.675-1.542 0-.622-.28-1.219-.792-1.542-.537-.323-1.517-.249-2.147-.249h-.868v3.732h1.148c.654-.001 1.424.049 1.984-.399zm-.146 10.694H4.476V3.969h7.483c2.166 0 4.166 1.424 4.166 3.936 0 1.939-1.051 3.268-2.387 3.681v.05c1.982.423 3.401 1.535 3.401 4.219 0 2.483-1.639 5.175-5.815 5.175v.001z"
                            />
                        </svg>
                        <span class="social-counter vk-counter"
                            >16</span
                        >
                        <svg
                            class="yandex-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zm11.083 4.729c.004 1.178-.988 2.123-2.218 2.115-1.226-.007-2.211-.961-2.205-2.134.006-1.132 1-2.083 2.194-2.1 1.208-.016 2.228.952 2.228 2.119h.001zM7.298 15.159c-.498-.217-.997-.372-1.426-.634-1.423-.87-2.057-2.813-1.532-4.559.456-1.468 1.555-2.331 3.064-2.354 1.041-.017 2.082-.001 3.126-.002 1.702-.004 2.806-1.032 2.885-2.697.023-.544-.012-1.088.017-1.629.023-.418.297-.651.718-.663.425-.011.744.229.741.631-.008.969.042 1.965-.17 2.901-.416 1.841-1.788 2.831-4.09 3.134v.648c0 3.895.001 7.791-.002 11.685 0 .743-.26.998-.989.993-.673-.005-.95-.261-.953-.916-.006-1.554-.002-3.109-.002-4.662v-.446c-.033-.015-.065-.027-.097-.042-.08.148-.168.293-.24.446-.766 1.572-1.526 3.145-2.294 4.717-.387.794-1.206 1.14-2.073.88-.416-.123-.397-.407-.24-.713.43-.836.87-1.668 1.306-2.502.554-1.068 1.744-3.257 2.253-4.215l-.002-.001zm1.25-5.781c-1.278.107-1.903.028-2.366.684-.557.788-.402 1.691.135 2.492.411.613 1.133.741 2.244.795.02-1.71-.013-2.098-.013-3.971z"
                            />
                        </svg>
                        <span class="social-counter yandex-counter"
                            >1</span
                        >
            </div>
        </div>
        <div class="blog-post-wrapper">
            <div class="blog-post">
                <div class="blog-post-image colorful"></div>
                <h3 class="blog-post-title">
                    Blogotitle about colorful
                </h3>
                <div class="blog-post-info">
                    <div class="blog-post-date">22:50 Jan 01, 2014</div>
                    <div class="footprint"></div>
                    <div class="blog-post-author">
                        by E.Hyperraccoon
                    </div>
                    
                </div>
                <div class="blog-post-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Nulla et, tenetur fugiat, eius numquam
                    consequatur consequuntur ducimus autem, possimus
                    nisi aut quod. Dolores vitae, voluptates fugiat
                    pariatur omnis dolore corporis.
                </div>
            </div>
            <div class="blog-post-social">
                        <svg
                            class="facebook-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zm9.857 20.899v-7.905h2.886l.118-2.84H9.898V8.104c0-.394.067-.705.2-.934.135-.229.453-.335.957-.32l1.777.001.071-2.651a6.462 6.462 0 00-.675-.059 13.131 13.131 0 01-.627-.035 9.124 9.124 0 00-.661-.024c-.694-.047-1.29.028-1.788.225a3.27 3.27 0 00-1.23.828A3.477 3.477 0 007.2 6.354a4.246 4.246 0 00-.237 1.395v2.438H4.929v2.84h2.034v7.904l2.935.001h.001z"
                            />
                        </svg>
                        <span class="social-counter facebook-counter"
                            >16</span
                        >
                        <svg
                            class="gplus-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H12.176c.369-.917.554-1.479.554-2.31 0-.683-.114-1.315-.342-1.899-.225-.584-.512-1.065-.857-1.441v-.003a16.36 16.36 0 00-1.116-1.1 16.081 16.081 0 00-1.116-.923 4.137 4.137 0 01-.86-.845c-.227-.304-.341-.613-.341-.923 0-.372.118-.723.356-1.054.238-.332.526-.648.868-.954.342-.304.681-.638 1.015-.999.335-.361.623-.843.86-1.442.238-.599.356-1.276.356-2.03 0-.753-.137-1.506-.411-2.255-.272-.749-.663-1.361-1.169-1.837a1.331 1.331 0 00-.216-.17 8.918 8.918 0 00-.193-.116.508.508 0 01-.154-.146 1.511 1.511 0 01-.164-.265l2.092.001 2.093-.992H6.658c-1.426 0-2.689.199-3.789.597C1.77 4.259.826 4.947.042 5.929V.033zm19.835 3.23h-1.983v3.968h-3.968v1.984h3.968v3.968h1.983V9.215h3.968V7.231h-3.968V3.263zm-9.419 21.704H.042v-2.674c.02-.314.359-.639.591-.908.979-1.128 2.45-1.605 3.887-1.798a12.305 12.305 0 011.658-.108c.332 0 .584.009.76.03.062.042.219.149.472.325.254.175.423.294.51.357.087.063.248.182.48.356.232.175.397.309.496.395.099.089.24.221.426.395.186.175.324.328.411.458.087.129.195.286.325.472.129.187.219.364.271.536.051.17.101.356.146.558.045.202.069.411.069.629 0 .291-.029.757-.086.977zM.042 19.864v-6.708c1.062 1.218 2.472 1.827 4.229 1.827.33 0 .691-.025 1.085-.077-.216.631-.325 1.075-.325 1.333 0 .692.325 1.462.977 2.31-2.418.071-4.407.509-5.966 1.315zm5.794-5.813a3.007 3.007 0 01-1.504-.402 3.998 3.998 0 01-1.208-1.047 7.496 7.496 0 01-.868-1.449 7.868 7.868 0 01-.55-1.613 7.091 7.091 0 01-.178-1.534c0-.992.265-1.845.797-2.558.532-.713 1.279-1.069 2.24-1.069.683 0 1.297.212 1.844.637.548.423.982.96 1.303 1.612.319.651.562 1.324.728 2.015.165.691.248 1.353.248 1.984 0 1.033-.226 1.862-.676 2.488-.449.625-1.175.938-2.176.938v-.002z"
                            />
                        </svg>
                        <span class="social-counter gplus-counter"
                            >7</span
                        >
                        <svg
                            class="twitter-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zM21.529 6.03a8.328 8.328 0 01-1.947.59 4.316 4.316 0 001.519-2.135.102.102 0 00-.033-.112.104.104 0 00-.117-.008 8.352 8.352 0 01-2.59 1 4.34 4.34 0 00-3.114-1.323 4.326 4.326 0 00-4.238 5.173 11.914 11.914 0 01-8.486-4.362.095.095 0 00-.088-.038.1.1 0 00-.081.051 4.321 4.321 0 001.041 5.555 4.128 4.128 0 01-1.507-.489c-.032-.018-.036-.017-.066.001-.032.018-.018.051-.018.087v.057c0 1.902 1.219 3.572 3.003 4.127-.471.077-.974.07-1.454-.02a.124.124 0 00-.105.032c-.023.028-.037.065-.026.1a4.32 4.32 0 003.75 2.986 8.317 8.317 0 01-4.952 1.614c-.333 0-.666-.02-.995-.06a.109.109 0 00-.111.068.103.103 0 00.042.122 12.06 12.06 0 006.522 1.912c7.576 0 12.104-6.154 12.104-12.106 0-.165-.004-.33-.01-.495a8.593 8.593 0 002.084-2.176.102.102 0 00-.006-.123.105.105 0 00-.122-.028h.001z"
                            />
                        </svg>
                        <span class="social-counter twitter-counter"
                            >15</span
                        >
                        <svg
                            class="vk-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zm12.18 13.922c-.538-.321-1.284-.321-1.892-.321H8.337v4.24h1.829c.677 0 1.542.049 2.125-.374.535-.373.838-1.105.838-1.799 0-.648-.372-1.421-.908-1.746h.001zm-.752-3.618c.444-.349.675-.97.675-1.542 0-.622-.28-1.219-.792-1.542-.537-.323-1.517-.249-2.147-.249h-.868v3.732h1.148c.654-.001 1.424.049 1.984-.399zm-.146 10.694H4.476V3.969h7.483c2.166 0 4.166 1.424 4.166 3.936 0 1.939-1.051 3.268-2.387 3.681v.05c1.982.423 3.401 1.535 3.401 4.219 0 2.483-1.639 5.175-5.815 5.175v.001z"
                            />
                        </svg>
                        <span class="social-counter vk-counter"
                            >16</span
                        >
                        <svg
                            class="yandex-icon social"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="25"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M.042.033h49.966v24.934H.042V.033zm11.083 4.729c.004 1.178-.988 2.123-2.218 2.115-1.226-.007-2.211-.961-2.205-2.134.006-1.132 1-2.083 2.194-2.1 1.208-.016 2.228.952 2.228 2.119h.001zM7.298 15.159c-.498-.217-.997-.372-1.426-.634-1.423-.87-2.057-2.813-1.532-4.559.456-1.468 1.555-2.331 3.064-2.354 1.041-.017 2.082-.001 3.126-.002 1.702-.004 2.806-1.032 2.885-2.697.023-.544-.012-1.088.017-1.629.023-.418.297-.651.718-.663.425-.011.744.229.741.631-.008.969.042 1.965-.17 2.901-.416 1.841-1.788 2.831-4.09 3.134v.648c0 3.895.001 7.791-.002 11.685 0 .743-.26.998-.989.993-.673-.005-.95-.261-.953-.916-.006-1.554-.002-3.109-.002-4.662v-.446c-.033-.015-.065-.027-.097-.042-.08.148-.168.293-.24.446-.766 1.572-1.526 3.145-2.294 4.717-.387.794-1.206 1.14-2.073.88-.416-.123-.397-.407-.24-.713.43-.836.87-1.668 1.306-2.502.554-1.068 1.744-3.257 2.253-4.215l-.002-.001zm1.25-5.781c-1.278.107-1.903.028-2.366.684-.557.788-.402 1.691.135 2.492.411.613 1.133.741 2.244.795.02-1.71-.013-2.098-.013-3.971z"
                            />
                        </svg>
                        <span class="social-counter yandex-counter"
                            >1</span
                        >
            </div>
        </div>
    `;
        return view;
    },
    renderAsideLaptop: () => {
        return Create.renderAbout() + Create.renderInfo();
    },
    renderAbout: () => {
        let view = /*html*/ `
        <div class="about">
                    <div class="about-header">
                        <div class="questionmark extras-icon"></div>

                        <h3>ABOUT</h3>
                    </div>

                    <div class="about-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim sed eveniet consectetur itaque ullam libero
                        aspernatur neque facere eaque, assumenda porro ducimus
                        quibusdam ut autem vero harum fugiat aut? Dolorum! Lorem
                        ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptate cum accusantium quae eum maxime delectus
                        nostrum laborum in. Nostrum ipsum nisi distinctio fuga
                        maxime quae dolor ab vitae porro doloribus. Dolorem.
                    </div>
                </div>
        `;
        return view;
    },
    renderInfo: () => {
        let view = /*html*/ `
        <div class="info">
                    <div class="info-header">
                        <div class="exclamation extras-icon"></div>

                        <h3>SOME INFORMATION</h3>
                    </div>

                    <div class="info-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab blanditiis molestias exercitationem vel est
                        explicabo aspernatur omnis nulla quibusdam labore
                        quaerat beatae eveniet voluptates, optio id enim
                        quisquam delectus. Veniam. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Voluptas aut rerum
                        corrupti velit dignissimos enim, fuga culpa sint!
                        Blanditiis, eum. Tempore itaque dolores laborum
                        architecto eius culpa libero error beatae?
                    </div>
                </div>
        `;
        return view;
    },
    renderNavbarLaptop: () => {
        let view = /*html*/ `
        <ul class="nav-links">
                
                <li id="js">
                    <a class="nav-link" href="#js">JAVASCRIPT</a>
                </li>
                <li id="css"><a class="nav-link" href="#css">CSS</a></li>
                <li id="latest">
                    <a class="nav-link" href="#latest">LATEST</a>
                </li>
                <li id="html"><a class="nav-link" href="#html">HTML</a></li>
                <li id="design">
                    <a class="nav-link" href="#design">DESIGN</a>
                </li>
                
        </ul>
        `;
        return view;
    },
    renderNavbarTablet: () => {
        let view = /*html*/ `
        <ul class="nav-links">
                <li id="about">
                    <a class="about-btn" href="#about">
                        <div onclick="aboutClick()" id="aboutIcon" class="about-icon"></div
                    ></a>
                </li>
                <li id="js">
                    <a class="nav-link" href="#js">JAVASCRIPT</a>
                </li>
                <li id="css"><a class="nav-link" href="#css">CSS</a></li>
                <li id="latest">
                    <a class="nav-link" href="#latest">LATEST</a>
                </li>
                <li id="html"><a class="nav-link" href="#html">HTML</a></li>
                <li id="design">
                    <a class="nav-link" href="#design">DESIGN</a>
                </li>
                <li id="info">
                    <a class="info-btn" href="#info"
                        ><div onclick="infoClick()" id="infoIcon" class="info-icon"></div
                    ></a>
                </li>
        </ul>
        `;
        return view;
    },
    renderAboutTablet: () => {
        let view = /*html*/ `
            <div id="aboutTablet" class="about-wrapper-tablet">
                <h3 class="about-header-tablet">ABOUT</h3>
                <div class="about-text-tablet">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Enim sed eveniet consectetur itaque ullam libero
                    aspernatur neque facere eaque, assumenda porro ducimus
                    quibusdam ut autem vero harum fugiat aut? Dolorum! Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptate cum accusantium quae eum maxime delectus
                    nostrum laborum in. Nostrum ipsum nisi distinctio fuga
                    maxime quae dolor ab vitae porro doloribus. Dolorem.
                </div>
            </div>
        `;
        return view;
    },
    renderInfoTablet: () => {
        let view = /*html*/ `
            <div id="infoTablet" class="info-wrapper-tablet">
                <div class="info-text-tablet">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Enim sed eveniet consectetur itaque ullam libero
                    aspernatur neque facere eaque, assumenda porro ducimus
                    quibusdam ut autem vero harum fugiat aut? Dolorum! Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptate cum accusantium quae eum maxime delectus
                    nostrum laborum in. Nostrum ipsum nisi distinctio fuga
                    maxime quae dolor ab vitae porro doloribus. Dolorem.
                </div>
                <h3 class="info-header-tablet">INFORM</h3>
            </div>
        `;
        return view;
    },
};

function contentPosition(currWidth) {
    if (currWidth > tabletWidth) {
        document.getElementById([
            'menu',
        ]).innerHTML = Create.renderNavbarLaptop();
        document.getElementById(['aside']).innerHTML =
            Create.renderAsideLaptop() + Create.renderTagsLaptop();
        document.getElementById([
            'content',
        ]).innerHTML = Create.renderContentLaptop();
    } else if (currWidth <= tabletWidth) {
        document.getElementById(['content']).innerHTML =
            Create.renderAboutTablet() +
            Create.renderInfoTablet() +
            Create.renderTagsTablet() +
            Create.renderContentTablet();
        document.getElementById([
            'menu',
        ]).innerHTML = Create.renderNavbarTablet();
    }
}
module.exports = contentPosition;
