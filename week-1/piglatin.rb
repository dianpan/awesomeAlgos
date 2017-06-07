def piglatin(word)
    charArray = word.split('')
    vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    non_vowels = []
    dupe_word = word.dup

    if vowels.include?(charArray[0])
        return word + 'way'
    else
      charArray.map do |letter|
        break if vowels.include?(letter)
        non_vowels << letter
        dupe_word.slice!(0)
      end
    end
    dupe_word + non_vowels.join + 'ay'
end


p piglatin('amazing')
# amazingway
p piglatin('codefights')
# odefightscay
p piglatin('flywhy')
# ywhyflay
