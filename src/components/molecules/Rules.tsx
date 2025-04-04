import React from 'react'
import RuleItem from '../atoms/RuleItem'

const rules = [
  "Each player is dealt two cards. The dealer also gets two cards, one face up and one face down.",
  "Players can choose to 'hit' (take another card) or 'stand' (keep their current hand).",
  "If a player goes over 21, they 'bust' and lose the game.",
  "If the dealer busts, all remaining players win.",
  "If the dealer does not bust, the player with the highest hand wins.",
  "A player can also choose to 'double down' (double their bet and take one more card) or 'surrender' (forfeit half their bet and end the game).",
  "A player can also choose to 'split' (divide their hand into two separate hands) if they have two cards of the same value.",
  "The game is played with more or less decks of standard playing cards. (4, 5, 6, 7, 8 decks)",
  "The dealer must hit on 16 or less and stand on 17 or more.",
  "Blackjack (an Ace and a 10-value card on the initial deal) pays 3:2."
]

export default function Rules() {
  return (
    <ul className="flex flex-col items-start mt-8 ">
      {rules.map((rule, index) => (
        <RuleItem
          key={index}
          rulePosition={index + 1}
          ruleDescription={rule}
        />
      ))}
    </ul>
  )
}
