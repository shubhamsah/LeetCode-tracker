import { useState, useEffect } from 'react';
import { Star, Video, ExternalLink, Edit3, Clock, Calendar } from 'lucide-react';
import problemCategories from './Problems';

const LeetCodeTracker = () => {
    const [solvedProblems, setSolvedProblems] = useState(new Set());
    const [starredProblems, setStarredProblems] = useState(new Set());
    const [notes, setNotes] = useState({});
    const [revision48h, setRevision48h] = useState(new Set());
    const [revision7d, setRevision7d] = useState(new Set());
    const [editingNote, setEditingNote] = useState(null);
    const [tempNote, setTempNote] = useState('');

    // Load state from localStorage on component mount
    useEffect(() => {
        try {
            const savedSolved = localStorage.getItem('leetcode-solved');
            const savedStarred = localStorage.getItem('leetcode-starred');
            const savedNotes = localStorage.getItem('leetcode-notes');
            const savedRevision48h = localStorage.getItem('leetcode-revision-48h');
            const savedRevision7d = localStorage.getItem('leetcode-revision-7d');

            if (savedSolved) setSolvedProblems(new Set(JSON.parse(savedSolved)));
            if (savedStarred) setStarredProblems(new Set(JSON.parse(savedStarred)));
            if (savedNotes) setNotes(JSON.parse(savedNotes));
            if (savedRevision48h) setRevision48h(new Set(JSON.parse(savedRevision48h)));
            if (savedRevision7d) setRevision7d(new Set(JSON.parse(savedRevision7d)));
        } catch (error) {
            console.error('Error loading saved state:', error);
        }
    }, []);

    // Save state to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('leetcode-solved', JSON.stringify([...solvedProblems]));
    }, [solvedProblems]);

    useEffect(() => {
        localStorage.setItem('leetcode-starred', JSON.stringify([...starredProblems]));
    }, [starredProblems]);

    useEffect(() => {
        localStorage.setItem('leetcode-notes', JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        localStorage.setItem('leetcode-revision-48h', JSON.stringify([...revision48h]));
    }, [revision48h]);

    useEffect(() => {
        localStorage.setItem('leetcode-revision-7d', JSON.stringify([...revision7d]));
    }, [revision7d]);



    const toggleSolved = (categoryIndex, problemIndex) => {
        const problemId = `${categoryIndex}-${problemIndex}`;
        setSolvedProblems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(problemId)) {
                newSet.delete(problemId);
            } else {
                newSet.add(problemId);
            }
            return newSet;
        });
    };

    const toggleStar = (categoryIndex, problemIndex) => {
        const problemId = `${categoryIndex}-${problemIndex}`;
        setStarredProblems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(problemId)) {
                newSet.delete(problemId);
            } else {
                newSet.add(problemId);
            }
            return newSet;
        });
    };

    const toggleRevision48h = (categoryIndex, problemIndex) => {
        const problemId = `${categoryIndex}-${problemIndex}`;
        setRevision48h(prev => {
            const newSet = new Set(prev);
            if (newSet.has(problemId)) {
                newSet.delete(problemId);
            } else {
                newSet.add(problemId);
            }
            return newSet;
        });
    };

    const toggleRevision7d = (categoryIndex, problemIndex) => {
        const problemId = `${categoryIndex}-${problemIndex}`;
        setRevision7d(prev => {
            const newSet = new Set(prev);
            if (newSet.has(problemId)) {
                newSet.delete(problemId);
            } else {
                newSet.add(problemId);
            }
            return newSet;
        });
    };

    const handleNoteEdit = (categoryIndex, problemIndex) => {
        const problemId = `${categoryIndex}-${problemIndex}`;
        setEditingNote(problemId);
        setTempNote(notes[problemId] || '');
    };

    const saveNote = () => {
        if (editingNote) {
            setNotes(prev => ({
                ...prev,
                [editingNote]: tempNote.trim()
            }));
        }
        setEditingNote(null);
        setTempNote('');
    };

    const cancelNote = () => {
        setEditingNote(null);
        setTempNote('');
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 'text-green-400';
            case 'Medium':
                return 'text-yellow-400';
            case 'Hard':
                return 'text-red-400';
            default:
                return 'text-gray-400';
        }
    };

    const getTotalSolved = () => {
        return solvedProblems.size;
    };

    const getTotalProblems = () => {
        return problemCategories.reduce((total, category) => total + category.problems.length, 0);
    };

    const getCategoryStats = (categoryIndex) => {
        const category = problemCategories[categoryIndex];
        const solvedCount = category.problems.reduce((count, _, problemIndex) => {
            const problemId = `${categoryIndex}-${problemIndex}`;
            return solvedProblems.has(problemId) ? count + 1 : count;
        }, 0);
        return { solved: solvedCount, total: category.problems.length };
    };

    const createLeetCodeUrl = (problemName) => {
        return `https://leetcode.com/problems/${problemName
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[()]/g, '') // Remove parentheses
            }`;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-full mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-center mb-4">NeetCode 250 Problems</h1>
                    <div className="text-center text-xl">
                        <span className="text-green-400">{getTotalSolved()}</span>
                        <span className="text-gray-400"> / {getTotalProblems()}</span>
                        <span className="text-gray-400 ml-2">problems solved</span>
                    </div>
                </div>

                {problemCategories.map((category, categoryIndex) => {
                    const stats = getCategoryStats(categoryIndex);
                    return (
                        <div key={category.title} className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-center">
                                {category.title}
                                <span className="text-lg text-gray-400 ml-4">
                                    ({stats.solved}/{stats.total})
                                </span>
                            </h2>
                            <div className="bg-gray-800 rounded-lg overflow-hidden">
                                <div className="grid grid-cols-16 gap-2 p-4 bg-gray-700 text-sm font-medium">
                                    <div className="col-span-1">Status</div>
                                    <div className="col-span-1">Star</div>
                                    <div className="col-span-4">Problem</div>
                                    <div className="col-span-1">Difficulty</div>
                                    <div className="col-span-5">Notes</div>
                                    <div className='col-span-1'></div>
                                    <div className="col-span-1">48h</div>
                                    <div className="col-span-1">7d</div>
                                </div>

                                {category.problems.map((problem, problemIndex) => {
                                    const problemId = `${categoryIndex}-${problemIndex}`;
                                    const isSolved = solvedProblems.has(problemId);
                                    const isStarred = starredProblems.has(problemId);
                                    const needsRevision48h = revision48h.has(problemId);
                                    const needsRevision7d = revision7d.has(problemId);
                                    const problemNote = notes[problemId] || '';
                                    const isEditingThisNote = editingNote === problemId;

                                    return (
                                        <div
                                            key={problem.name}
                                            className={`grid grid-cols-16 gap-2 p-4 border-b border-gray-700 hover:bg-gray-750 transition-colors ${isSolved ? 'bg-teal-900 bg-opacity-30' : ''
                                                }`}
                                        >
                                            {/* Status */}
                                            <div className="col-span-1 flex items-center">
                                                <div
                                                    className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-colors ${isSolved
                                                        ? 'bg-green-500 border-green-500'
                                                        : 'border-gray-400 hover:border-gray-300'
                                                        }`}
                                                    onClick={() => toggleSolved(categoryIndex, problemIndex)}
                                                >
                                                    {isSolved && (
                                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Star */}
                                            <div className="col-span-1 flex items-center">
                                                <Star
                                                    className={`w-5 h-5 cursor-pointer transition-colors ${isStarred ? 'text-yellow-400 fill-current' : 'text-gray-400 hover:text-yellow-400'
                                                        }`}
                                                    onClick={() => toggleStar(categoryIndex, problemIndex)}
                                                />
                                            </div>

                                            {/* Problem */}
                                            <div className="col-span-4 flex items-center">
                                                <a
                                                    href={createLeetCodeUrl(problem.name)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-blue-400 cursor-pointer truncate"
                                                >
                                                    {problem.name}
                                                </a>
                                            </div>

                                            {/* Difficulty */}
                                            <div className={`col-span-1 flex items-center font-medium text-sm ${getDifficultyColor(problem.difficulty)}`}>
                                                {problem.difficulty}
                                            </div>

                                            {/* Notes */}
                                            <div className="col-span-5 flex break-words">
                                                {isEditingThisNote ? (
                                                    <div className="flex flex-col w-full">
                                                        <textarea
                                                            className="bg-gray-700 p-2 rounded text-white w-full text-sm resize-none"
                                                            value={tempNote}
                                                            onChange={(e) => setTempNote(e.target.value)}
                                                            rows={2}
                                                        />
                                                        <div className="flex justify-end mt-1 space-x-2">
                                                            <button
                                                                onClick={saveNote}
                                                                className="px-2 py-1 bg-green-500 rounded hover:bg-green-400 text-white text-xs"
                                                            >
                                                                Save
                                                            </button>
                                                            <button
                                                                onClick={cancelNote}
                                                                className="px-2 py-1 bg-gray-500 rounded hover:bg-gray-400 text-white text-xs"
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex justify-between items-center w-full">
                                                        <span className="whitespace-normal break-words text-sm text-gray-3000">
                                                            {problemNote || 'No notes yet'}
                                                        </span>
                                                        <Edit3
                                                            className="w-4 h-4 text-gray-400 hover:text-blue-400 cursor-pointer ml-2 flex-shrink-0"
                                                            onClick={() => handleNoteEdit(categoryIndex, problemIndex)}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="col-span-1" /> {/* Empty spacer */}
                                            {/* 48h Revision */}
                                            <div className="col-span-1 flex items-center">
                                                <div
                                                    className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-colors ${needsRevision48h
                                                        ? 'bg-orange-500 border-orange-500'
                                                        : 'border-gray-400 hover:border-orange-300'
                                                        }`}
                                                    onClick={() => toggleRevision48h(categoryIndex, problemIndex)}
                                                    title="Mark for 48-hour revision"
                                                >
                                                    {needsRevision48h && <Clock className="w-3 h-3 text-white" />}
                                                </div>
                                            </div>

                                            {/* 7d Revision */}
                                            <div className="col-span-1 flex items-center">
                                                <div
                                                    className={`w-5 h-5 border-2 rounded cursor-pointer flex items-center justify-center transition-colors ${needsRevision7d
                                                        ? 'bg-purple-500 border-purple-500'
                                                        : 'border-gray-400 hover:border-purple-300'
                                                        }`}
                                                    onClick={() => toggleRevision7d(categoryIndex, problemIndex)}
                                                    title="Mark for 7-day revision"
                                                >
                                                    {needsRevision7d && <Calendar className="w-3 h-3 text-white" />}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LeetCodeTracker;