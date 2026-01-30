<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] distribution.

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] random variable is given by

<!-- <equation class="equation" label="eq:hypergeometric_pmf" align="center" raw="f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a hypergeometric distribution."> -->

```math
f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:hypergeometric_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/logpmf/docs/img/equation_hypergeometric_pmf.svg" alt="Probability mass function (PMF) for a hypergeometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-logpmf@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/tags). For example,

```javascript
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-logpmf@v0.1.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-logpmf@deno/mod.js';
```

#### logpmf( x, N, K, n )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var y = logpmf( 1.0, 8, 4, 2 );
// returns ~-0.56

y = logpmf( 2.0, 8, 4, 2 );
// returns ~-1.54

y = logpmf( 0.0, 8, 4, 2 );
// returns ~-1.54

y = logpmf( 1.5, 8, 4, 2 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 10, 5, 2 );
// returns NaN

y = logpmf( 0.0, NaN, 5, 2 );
// returns NaN

y = logpmf( 0.0, 10, NaN, 2 );
// returns NaN

y = logpmf( 0.0, 10, 5, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 10.5, 5, 2 );
// returns NaN

y = logpmf( 2.0, 10, 1.5, 2 );
// returns NaN

y = logpmf( 2.0, 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 10, 5, 12 );
// returns NaN

y = logpmf( 2.0, 8, 3, 9 );
// returns NaN
```

#### logpmf.factory( N, K, n )

Returns a function for evaluating the natural logarithm of the [probability mass function][pmf] (PMF) of a [hypergeometric ][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var mylogpmf = logpmf.factory( 30, 20, 5 );
var y = mylogpmf( 4.0 );
// returns ~-1.079

y = mylogpmf( 1.0 );
// returns ~-3.524
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-logpmf@deno/mod.js';

var i;
var N;
var K;
var n;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 5.0 );
    N = round( randu() * 20.0 );
    K = round( randu() * N );
    n = round( randu() * N );
    y = logpmf( x, N, K, n );
    console.log( 'x: %d, N: %d, K: %d, n: %d, ln(P(X=x;N,K,n)): %d', x, N, K, n, y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-hypergeometric-logpmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-hypergeometric-logpmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-hypergeometric-logpmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-hypergeometric-logpmf?branch=v0.1.1

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-hypergeometric-logpmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-hypergeometric-logpmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-hypergeometric-logpmf/main/LICENSE

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
