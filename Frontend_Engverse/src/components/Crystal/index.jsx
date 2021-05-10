import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core/';
import crystalCircle1 from '../../assets/hud/crystalCircle1.png';

const CrystalWrapper = styled(Box)`
    position: absolute;
    top: 88%;
    left: 50%;
    width: 114px;
    height: 114px;
    margin: -57px 0 0 -57px;
    @media (max-width: 1280px) {
        display: none;
    }
`;
const CrystalImgMove = styled(Box)`
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -46px 0 0 -36px;
    width: 72px;
    height: 120px;
    animation: animate-vertical 2s linear infinite;
`;
const CrystalBg = styled(Box)`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`;
const CrystalBgInner = styled(Box)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(data:image/png;base64,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)
        no-repeat;
    background-size: cover;
    opacity: 0;
    visibility: hidden;
    transition: 'all 1.3s ease, visibility 1.3s ease';
    transform-origin: 50% 50%;
`;
const CrystalImg = styled(Box)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: scale(0.6);
    transition: all 0.15s ease;
`;
const CrystalImgs = styled(Box)`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    animation: animate-image 6s linear infinite;
    background-repeat: no-repeat;
    background-size: cover;
`;
const CrystalImg1 = styled(CrystalImgs)`
    animation-delay: 0s;
    opacity: 0;
    background-image: url(data:image/png;base64,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);
`;
const CrystalImg2 = styled(CrystalImgs)`
    animation-delay: 1.5s;
    opacity: 0;
    background-image: url(data:image/png;base64,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);
`;
const CrystalImg3 = styled(CrystalImgs)`
    animation-delay: 3s;
    opacity: 0;
    background-image: url(data:image/png;base64,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);
`;
const CrystalImg4 = styled(CrystalImgs)`
    animation-delay: 4.5s;
    opacity: 0;
    background-image: url(data:image/png;base64,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);
`;
const CrystalCircle = styled(Box)`
    position: absolute;
    right: 0;
    left: 0;
    top: 3px;
    bottom: 0;
    opacity: 0;
    transition: all 0.15s ease;
    transition: opacity 0.5s ease;
`;
const CrystalCircle1 = styled(Box)`
    position: absolute;
    left: -6px;
    top: -7px;
    width: 95px;
    height: 131px;
    background: url(${crystalCircle1}) no-repeat;
    background-size: cover;
    animation: rotate-animate 2s linear infinite;
    transform-origin: 65px 66px;
`;
const CrystalCircle2 = styled(Box)`
    position: absolute;
    left: 12px;
    top: -7px;
    width: 111px;
    height: 57px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAByCAYAAAA8uW8iAAAAAXNSR0IArs4c6QAADu1JREFUeAHtnYvb1MQVxqFewFIEAQUFBBSvxbbaVm2f/vt9tLZarRYrSPlQroooVFCqLX1/S2Y7m53ZbHaT3ST7nuc5X7K5zrxz3pyZMyf5tm2zGAEjsHIEtq/8jr5hJQL37t17QAftkD4kZf3BzPIn2v5f6X+k94p1fsf6Y7GfJXp3+/btHG9ZIwIm3hrAF7HA/WfSXdKfSh+Jlqw/LG1T7urit6V3Cg3rt0VK9llaRsDEaxngwns9qtvskcZLvFUX5d8q1M1Ib4iM33exoH0uk4nXcOuJaHQRHy90r5Z4tr4LHvGG9CtURMRTWpZAwMRbAjxOFdEYf+2TBrLtZvvABQ84IqGWV909rd/aJl59zCAbXu2w9JD0MWkb3UYCIIy3WKaUQAnCeJAgDMo6DwLWV9m213W/y9IrIiFdVUsFAqtsnIqidHt3MVY7qFIeleLdlsGOqOO30n9J8R4oJBsvZcCBWNpcX4ryQkQeEkEJ5uCRUYI6TQuR1UBCPKFJmEF4GePJXHJYm2XA+1WjI9KnpHiTOgLBIBcaiMb6HRklRro2KYjJ+DMQkSXBH6KqTQj1uya9IP1y3fVtokJNXsPES6Apo6Sr9rT0uLSOZ6BLOA5CaP0bGRzk642o7nhJHjYHpE9I69RfhyeFYAwE/Fx4eLpCQJh4kZ3I6PAAJ6R0J5m4rhJI9aX0KymEg2hr9WQqQ6MiTCBeCByxrOv14/KA1xXpBeEEZhsrJp6aXsaFQT0j5QlfJRDrCynBBMYxS43Fqm7Wpf3CCXthigSc6HrzoFpU6HKflV4e2sNqHkA2lniFERGZfE5aZUCQ7br0khSy/aDlxoswJKLL+Bcc6Z4vIox9IeClTSLgRhJPBvOkGvoFKQGFWYJRbEkxCkfoMkgJT6ZTmFqBhHjDRezqts4LBOzVuFjlri2LAFT7Jl05QQaCUbwoJX0rJ3g3xiFbIttGj0NyAM3aLox3aP/T0uPSndK6ckcnQEACMYMaL8dAbATxZAxE6SAcGSY5ocEvSB15yyFUY3vhBelZMHZmXFhXbumED0U+glaDk0ETT43PE/eUFAPICQnBZ6TXhvyEzVV+FdvVDowFT0gJyNS1uYs657TaZlDTEHVBEAbdFzU09Touxcvlwt9fa98ZNSgRSssKECgehCd1q2PSOml2RI4/kdL9H8T4b3DEU+MyfvuFNNe9Ydx2Vg3I/JtlDQiojciOIZrMWLCODTIFQfez92PvOpVWnbsrakw8G5FKxhQp+UYb6bL0vtFSlevjNrUZk/O0GdHQOvKpDv6kz95vEMRTAzKG+LU0lWfINMBp6UU11GCjZKpfb0Xtxzwqw4JZY/Fy/XiQvqc2ZRqid9Jr4qnBKP+zUhqtXBdIdl7KOO4HLS0dR0DtSQYRwwQ84TxCbuzf1L4EYHolZWPtTeHVSEQsX5WSzFsWskw+UoMwJrD0CAG1KzmyBGDQeQMwEI+xH0GYXkgviafGYSIc0pFJHwuejQYgtcvSYwTUxnQ/8X7Mwc4jzMP+WW3P/F/npVfEU2NQ3pekdC/Lgpd7X8B/V97h3/1FQG1O4OWUdJ5cULqe2AAJ7J2W3hBPDQDwBFAYB8TCvA7BE+Z4HDyJkRnIutqeoNmvpKlhRaqWpJwR9eysPfSCeAJ+t4D8rZRPF8RyUz/+KoA9lotRGeC6bABbZaqIQNo8Yz8SI4h6djKw1nniCXC+c/Ka9EFpLL2fy4kr4/X5EJA9PKojsQcexlXCVAPjvs49mDtNPIFMdgNPuFiIXOHlrsYbvb45CMguiHwy1j8xR62xl3dkL51KnOgk8QQsXYlfShlYx8KTiycYTzLLhiMgOyHpmrEfRJwlxAH+Iru5NuugVe7rHPGKpxlBFLqYsTBFwGQpTzCLERghIHvJjf/LCBFooaeEHa1dOkU8gcg47nXp/ggZAPu7ADsfbfOqERgjILsh4s28bvlhPT4mWiGxYu221BniCTwmw9+Q7o1AYl6GrqXfJIhA8eo0ArIfbPn5QqcPmNzCVAPvYK5NOkE8gUb61++kZCsE4cXHPwkgpgwsRmAuBGRLJFoT9ayaclgr+dZOPAHFNzr+II0TY/nIEKQjDchiBGohIJtiqMKQpTwFVb7OB7Kxz8obV/F7rcQTQADze2n88SHeDCf8y+s8FiOwEAKyLYIub0rpTeWE+AFDmZVHO9dGPAFDV4AxXZwGRLYBYV/GdhYjsBQCsjFSzSBfPIQpXxNbe0s2xwN/ZVLVD26lIAIEwhOFiklHAMWkawXxzbyoyPSdav5H6SxSMQf4umxyFjkbB3AtxFMtfi5l8jPIDa3g8u3pAiJeNoKAbIohy9tS3ljPCRH1N0U+4g0rkZUTT5U7qZqdiGoHIARSTLoIFK82h4Bsi6QLyDcrQk639A3ZZ1VAppGCrZR4qtRhlfqlqOS8tPh2AUy02atGoFkEZGO8pQD5SDvMCUG+12Snrcc+VkY8VYbxHOO6IEwZQLpOvrYRCunlcBCQrdHtfEuK7eWE7JcXczub2r4S4ol0zNH9RhqeJAx6IR2T5BYjsDIECpuDfLPmiE/KZiFga9I68VQBokaQjnw6BLIRvoV8FiOwcgRke/yvecjHMievynYZ97UirRNPpSaCSd8Z4fUMJsf9Ws8IDv9ZFwKyQTwe5MslauAoWhvvtUo8PTGYMjgmDUKKzqywbjjOSyPQOgKyRcZ670hxCCnZp43PpXYsu6014hVums+zBTmnil4MP7w0Al1AQDbJ5PoHM8ryvGz5sRn7F9rVCvFUUIIoZIiHcR2v3X+8UAl9khFoGYHCIXyauc3IlmXTjc7vtUI8VYD3onDTCMGUd1U5ElItRqCrCPxDBbueKRxR+Vcy+xba3Djx9GSAcBAPgWyQztMGIzj8p6sIFI7hPZUvF20/Itt+sqnyN0o8FYypA7qYQT5WhehmWoxA5xEoHMS7Kmgu2HKqqS5no8RTgfF0Ye7jqipyrvNou4BGIEJANkuw5aNoU7y6Uz9Cby7eXnu9MeLpSbBbd3+2KAFzI7MiRbUL6hOMwKoQEPku6F65CPwzsnU+qruUNEI8FYTID1MHLBH+Y09uYvL+Ef5rBLqNAF4vNd7Dxl8pbH7hGjRCPN39qDREMa+IdJcXLpFPNAIdQEA2TPJ+rteGrR9ZpphLE0/Mf1gFeLkoBF7uw2UK5HONQFcQEPn4KgLdzpS8LNtfeG5vaeKpRC9Iw0Q5Hwv11EGqmbytrwicVsFTXU4czsLpZEsRT4wnoBJyMb8Q6S71FV2X2wikEJBN8/b6+6l92kaghcn12rIU8XQ33jxgsMm8h7uYAsEyPAREPjJaPk/UDP4s9NLswsQT0w/qpo8XhTmrws16sTBRZm8yAr1CgC5nKlJ/WFyonUS9EPF0I84LARXercslmPYKWRfWCOQQkGOBdJAvJYELqX3JbQsRT1cilBq+Q8icXS7FJnlTbzQCfURAdk53M5UCua+u16tNPN2AMd3JAjjSwgi5WozApiBALCP1pk3gxFw41CaernpIuqu4+pm57uKDjMBAEJCj4fOAqbm9Q3JKgReVtV2EeIHZZKjcrLyDDzACw0PgrKqUGl6FXOXKGtcinhh9QFfcW1zV3q4SXh8wRATkcPg62VaibkfFkR2J7VObahFPZwdG4+1uTV3NG4zA5iBAJL/8bwfgE3nLlTI38cRkophPFFe0t6uE1gcMGQE5HlIj/5mo4zFxhQDkTJmbeLrKieJKpIbZ282E1Ts3BAGIV/Z6pJCFxJIsDHMRTwwmCzu4UE+WZ+H0jk1CQA6ISfXziTqH/OXErvub5iKeDoV0D0i/1s1SE4j3r+a/RmDzEEh5vYNyVnwmIivzEi90M+3tslB6xyYiUIz1tkp1Z4xHdldWKokn5vK2LROD5GRey17JO4zA5iJwTlUvz+s9NQuOSuLp5MPFBT4Tu1OpMrOu731GYPAIFF7vYqmie+S0su/qzSSeTsRlwlwIR4KoxQgYgTQCW4nN2Q/gziSeLkRYlFfcrxWsTlzbm4yAERA/SJ8s/yesbHezinihm2lvZ9syAtUIbJUO2ateY/jA88SuLPF0Avt4E4EZegdVJmDzDyOQRIDPWvJZwFj4UsOUZImnI0mIZuL8soMqU7h5gxGYQkA8IYulHGQJaZYTx88iHt4O8ZfD7uPgv0ZgHgTKw7ID6j2SfDIhSeIV0UyId0cs5p84WIyAEZgDgSLIEucyQzp6jxOSJJ6O4KtJvFdkbzcBl38YgbkQKHu9qaTpHPECQxksWoyAEaiHQNlhkf01ITniceBduc3YZU6c6B9GwAikERBvmAmIh2iPlsd5U8QrphEgnr8elsbVW43APAhcjQ4iA2xP9HvbFPGKAxgQmngxUl43AvUQKM99T3xtOkW80B818eoB7aONwBgBdTf5DGD8X4YqibdfJ9wq+qnjC3nFCBiB2gjEXi9PvGL+zuO72vj6BCOQRCAm3k7xa/xWermryZfEHpK6m5nE0RuNQC0E+EwKaWRBxl6vTDy6mbxJeyMc6aURMAKLIaDhGqSLnVj4GPRUVJP/8HqzOGGxu/ksI2AEYgT4p5ZBxm+klz3eLh3hSfMAk5dGYHkE4pdjHwmXKxOPMR5hUIsRMALNIHBTlwnfKpoOrhQZKzDSHq8ZwH0VI7BNwzZiJpAPIbJJFsvEGC/0P+3xQMZiBJpDIHQ3IR2zBhPEY3xHYjSfpbYYASPQHAKBeFyRj4dNEA+PZ28HKhYj0CwCMfGSHs/EaxZwX80IgMC30h8LKKY8Hl1NE69Axwsj0BQCGr4R1QwBliniuavZFNK+jhGYRiB0N028aWy8xQi0hkAg3v/HeMXcwj25xPLHOFsrhS9sBDYMAf7bFjJKWgmZK8wveBphhIv/GIFWEIhfih1PJ0A8e7tW8PZFjcA2MlhwbGSxTGWumHi2ECPQLgLf6/KjvE13NdsF2lc3AjEC4+5mIB477fFiiLxuBJpHAI83kkA8j/ECIl4agfYQmCIet7LHaw9wX9kIgABdzakxnoln4zAC7SJg4rWLr69uBJIITBGPo+zxklh5oxFoDIHxGG90RVLGwivpjd3CFzICRmAKAfFsFND8H+OijT7q4Z8+AAAAAElFTkSuQmCC)
        no-repeat;
    background-size: cover;
    animation: rotate-animate 2s linear infinite;
    transform-origin: 46px 64px;
`;
const CrystalCircle3 = styled(Box)`
    position: absolute;
    left: 59px;
    top: 31px;
    width: 53px;
    height: 74px;
    background: url(data:image/png;base64,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)
        no-repeat;
    background-size: cover;
    animation: rotate-animate 2s linear infinite;
    transform-origin: -1px 26px;
`;
const CrystalPointInner = styled(Box)``;

const CrystalPoint = styled(Box)`
    height: 2px;
    width: 2px;
    border-radius: 2px;
    background-color: #fff;
    position: absolute;
`;
const CrystalPoint1 = styled(CrystalPoint)`
    left: 39px;
    top: 46px;
    animation: animate-point1 2s linear infinite;
`;
const CrystalPoint2 = styled(CrystalPoint)`
    left: 43px;
    top: 50px;
    transform-origin: 20px 20px;
    animation: animate-point2 4s linear infinite;
    animation-delay: 0.7s;
`;
const CrystalPoint3 = styled(CrystalPoint)`
    left: 47px;
    top: 65px;
    transform-origin: 15px 15px;
    animation: animate-point2 4s linear infinite;
    animation-delay: 0.4s;
`;
const CrystalPoint4 = styled(CrystalPoint)`
    left: 79px;
    top: 74px;
    animation: animate-point1 2s linear infinite;
    animation-delay: 0.5s;
`;
const CrystalPoint5 = styled(CrystalPoint)`
    left: 73px;
    top: 85px;
    animation: animate-point1 2s linear infinite;
    animation-delay: 0.7s;
`;
const CrystalPoint6 = styled(CrystalPoint)`
    left: 67px;
    top: 57px;
    transform-origin: -10px -10px;
    animation: animate-point6 2s linear infinite;
    animation-delay: 0.7s;
`;
const CrystalPoint7 = styled(CrystalPoint)`
    left: 76px;
    top: 76px;
    transform-origin: -7px -8px;
    animation: animate-point6 2s linear infinite;
    animation-delay: 0.9s;
`;
const CrystalPoint8 = styled(CrystalPoint)`
    left: 67px;
    top: 51px;
    transform-origin: -7px -8px;
    animation: animate-point8 2s linear infinite;
    animation-delay: 0.5s;
`;
const CrystalPoint9 = styled(CrystalPoint)`
    left: 65px;
    top: 94px;
    animation: animate-point1 2s linear infinite;
    animation-delay: 0.9s;
`;
const CrystalPoint10 = styled(CrystalPoint)`
    left: 43px;
    top: 35px;
    animation: animate-point1 2s linear infinite;
    animation-delay: 0.9s;
`;

function Crystal() {
    return (
        <CrystalWrapper>
            <CrystalImgMove>
                <CrystalBg>
                    <CrystalBgInner />
                </CrystalBg>
                <CrystalImg>
                    <CrystalImg1 />
                    <CrystalImg2 />
                    <CrystalImg3 />
                    <CrystalImg4 />
                </CrystalImg>
            </CrystalImgMove>
            <CrystalCircle>
                <CrystalCircle1 />
                <CrystalCircle2 />
                <CrystalCircle3 />
            </CrystalCircle>
            <CrystalPointInner>
                <CrystalPoint1 />
                <CrystalPoint2 />
                <CrystalPoint3 />
                <CrystalPoint4 />
                <CrystalPoint5 />
                <CrystalPoint6 />
                <CrystalPoint7 />
                <CrystalPoint8 />
                <CrystalPoint9 />
                <CrystalPoint10 />
            </CrystalPointInner>
        </CrystalWrapper>
    );
}

export default Crystal;
