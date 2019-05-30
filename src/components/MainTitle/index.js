import React from 'react'

export const MainTitle = ({
  extraClassName = '',
  text = '',
  extraText = undefined,
  languageText,
  languageArray,
  onChange
}) => {
  console.log(languageArray)
  const selectedArray = languageArray.filter(item => item.isSelect)
  return (
    <div className={`sw-MainTitle ${extraClassName}`}>
      <div className="sw-MainTitle_Content">
        <h1 className="sw-MainTitle_Text">{text}</h1>
        {extraText ? <h2 className="sw-MainTitle_ExtraText" dangerouslySetInnerHTML={{ __html: extraText }} /> : null}
        <select value={selectedArray[0].name} onChange={onChange}>
          {languageArray.map((item, index) => {
            return (
              <option value={item.name} key={index.toString()}>
                {item.value}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
