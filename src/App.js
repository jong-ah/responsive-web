import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, corporis obcaecati? Necessitatibus quis
          amet aliquid optio, explicabo tenetur aspernatur ullam numquam ipsa corrupti, dolores officiis, aliquam illum
          in voluptatum! Est.
        </p>
        <a href="hihi">hihihi</a>

        <div>
          <input type="text" placeholder="인풋입니다" />
          <textarea cols="30" rows="10" placeholder="텍스트에리어입니다"></textarea>
          <select>
            <option value="0">셀렉트입니다</option>
          </select>
          <button type="button">버튼입니다</button>
        </div>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>

        <dl>
          <dt>Term</dt>
          <dd>Description</dd>
        </dl>

        <i class="ic-community"></i>
        <i class="ic-search" aria-label="검색"></i>
      </div>
    );
  }
}

export default App;
